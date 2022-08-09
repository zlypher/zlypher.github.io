import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "data", "posts");

export function getPostBySlug(slug: string): IPost {
  return getPostFromFilename(slug + ".md");
}

export interface IPost {
  content: string;
  slug: string;
  title: string;
  description: string;
  date: Date;
  url: string;
}

const getAllPostFiles = () => {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
};

const getPostFromFilename = (filename: string): IPost => {
  const fullPath = join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const slug = filename.replace(".md", "");

  return {
    ...data,
    slug: slug,
    content,
    url: "https://www.tompka.io/posts/" + slug,
  } as IPost;
};

export function getAllPosts(): IPost[] {
  const files = getAllPostFiles();
  const posts = files
    .map((filename) => getPostFromFilename(filename))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getLatestPosts(count: number): IPost[] {
  return getAllPosts().slice(0, count);
}