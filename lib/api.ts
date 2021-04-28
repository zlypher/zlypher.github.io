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
}

const getAllPostFiles = () => {
  return fs.readdirSync(postsDirectory);
};

const getPostFromFilename = (filename: string): IPost => {
  const fullPath = join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug: filename.replace(".md", ""),
    content,
  } as IPost;
};

export function getAllPosts(): IPost[] {
  const files = getAllPostFiles();
  const posts = files
    .map((filename) => getPostFromFilename(filename))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
