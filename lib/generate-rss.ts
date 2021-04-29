import { IPost } from "./api";
import markdownToHtml from "./markdown-to-html";

export async function generateRssItem(post: IPost) {
  const content = await markdownToHtml(post.content || "");

  return `
    <entry>
      <title type="html">${post.title}</title>
      <link href="https://zlypher.github.io/posts/${
        post.slug
      }" rel="alternate" type="text/html" title="VS Code Extension: Formatting Toggle"/>
      <published>${new Date(post.date).toUTCString()}</published>
      <updated>${new Date(post.date).toUTCString()}</updated>
      <id>https://zlypher.github.io/posts/${post.slug}</id>
      <content type="html" xml:base="https://zlypher.github.io/posts/${
        post.slug
      }"><![CDATA[${content}]]></content>
      <author>
        <name>Thomas Prochazka</name>
      </author>
      <summary type="html">${post.description}</summary>
    </entry>
  `;
}

export async function generateRss(posts: IPost[]) {
  const itemsList = await Promise.all(posts.map(generateRssItem));

  return `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
      <link href="https://zlypher.github.io/feed.xml" rel="self" type="application/atom+xml"/>
      <link href="https://zlypher.github.io/" rel="alternate" type="text/html"/>
      <updated>${new Date(posts[0].date).toUTCString()}</updated>
      <id>https://zlypher.github.io/feed.xml</id>
      <title type="html">Software Engineering by Thomas Prochazka</title>
      <subtitle>A little Software Engineering Blog by Thomas Prochazka, filled with posts regarding engineering problems and solutions</subtitle>
      <author>
        <name>Thomas Prochazka</name>
      </author>
        ${itemsList.join("")}
    </feed>
  `;
}
