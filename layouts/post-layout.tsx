import Head from "next/head";
import Link from "next/link";
import { IPost } from "../lib/api";
import { formatDate } from "../lib/format-date";
import BaseLayout from "./base-layout";

interface IPostLayoutProps {
  post: IPost;
  children: React.ReactNode;
}

const PostLayout = ({ children, post }: IPostLayoutProps) => (
  <BaseLayout>
    <article
      className="c-post"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header className="c-post__header">
        <time
          className="c-post__date"
          dateTime={new Date(post.date).toISOString()}
          itemProp="datePublished"
        >
          {formatDate(new Date(post.date))}
        </time>
        <h1 className="c-post__title" itemProp="name headline">
          {post.title}
        </h1>
      </header>
      <div className="c-post__content" itemProp="articleBody">
        {children}
      </div>
      <footer>
        <div className="c-post__share">
          <a
            className="c-post__share-link"
            target="blank"
            href="https://twitter.com/intent/tweet?text={{ post.title | cgi_escape }}%20{{ post.url | absolute_url }}"
          >
            <span className="u-sr-only">Share via Twitter</span>
            <svg className="c-post__share-icon">
              <use xlinkHref="#icon-twitter" />
            </svg>
          </a>
          <a
            className="c-post__share-link"
            target="blank"
            href="http://www.facebook.com/sharer/sharer.php?u={{ post.url | absolute_url }}&title={{ post.title | cgi_escape }}"
          >
            <span className="u-sr-only">Share via Facebook</span>
            <svg className="c-post__share-icon">
              <use xlinkHref="#icon-facebook" />
            </svg>
          </a>
        </div>
        <p className="c-post__info">
          Please let me know if you have any suggestions or corrections to
          improve this post. Feedback is always appreciated.
        </p>
      </footer>
    </article>
  </BaseLayout>
);

export default PostLayout;
