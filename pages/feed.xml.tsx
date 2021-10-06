import { getAllPosts } from "../lib/api";
import { generateRss } from "../lib/generate-rss";

export default function Feed() {
  return null;
}

export const getServerSideProps = async ({ res }) => {
  const posts = getAllPosts();

  res.setHeader("Content-Type", "text/xml");
  res.write(await generateRss(posts));
  res.end();

  return { props: {} };
};
