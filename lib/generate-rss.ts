import { IPost } from "./api";
import markdownToHtml from "./markdown-to-html";

export async function generateRssItem(post: IPost) {
  const content = await markdownToHtml(post.content || "");

  return `
    <item>
      <guid>BLOG_URL/posts/${post.slug}</guid>
      <title>${post.title}</title>
      <description>${post.description}</description>
      <link>BLOG_URL/posts/${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <content:encoded><![CDATA[${content}]]></content:encoded>
    </item>
  `;
}

export async function generateRss(posts: IPost[]) {
  const itemsList = await Promise.all(posts.map(generateRssItem));

  return `
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
        <title>BLOG_TITLE</title>
        <link>BLOG_URL</link>
        <description>BLOG_SUBTITLE</description>
        <language>en</language>
        <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
        <atom:link href="BLOG_URL" rel="self" type="application/rss+xml"/>
        ${itemsList.join("")}
      </channel>
    </rss>
  `;
}
