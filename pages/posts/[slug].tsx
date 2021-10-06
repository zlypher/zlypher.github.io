import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import PostLayout from "../../layouts/post-layout";
import { getAllPosts, getPostBySlug, IPost } from "../../lib/api";
import markdownToHtml from "../../lib/markdown-to-html";

interface IPostProps {
  post: IPost;
}

export default function Post({ post }: IPostProps) {
  return (
    <PostLayout post={post}>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </PostLayout>
  );
}

interface IStaticParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<
  IPostProps,
  IStaticParams
> = async ({ params }) => {
  const post = getPostBySlug(params.slug);

  const content = await markdownToHtml(post.content || "");
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
};
