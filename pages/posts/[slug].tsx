import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import PostLayout from "../../layouts/post-layout";
import { getAllPosts, getPostBySlug, IPost } from "../../lib/api";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

interface IPostProps {
  post: IPost;
}

export default function Post({ post }: IPostProps) {
  return (
    <PostLayout post={post}>
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
        {post.content}
      </ReactMarkdown>
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

  return {
    props: {
      post: {
        ...post,
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
