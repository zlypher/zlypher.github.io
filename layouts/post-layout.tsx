import Head from "next/head";
import { IPost } from "../lib/api";
import { formatDate } from "../lib/format-date";
import BaseLayout from "./base-layout";

interface IPostLayoutProps {
  post: IPost;
  children: React.ReactNode;
}

const fallbackImage =
  "https://www.gravatar.com/avatar/52a73317cd435a835d6cc927959f988c";

const PostLayout = ({ children, post }: IPostLayoutProps) => (
  <BaseLayout>
    <Head>
      <title>{post.title}</title>
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.description} />
      <meta
        property="og:image"
        content={post.banner ? post.banner : fallbackImage}
      />
      <meta property="og:url" content={post.url} />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:site_name"
        content="Software Engineering by Thomas Prochazka"
      />
    </Head>
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
      {post.banner ? (
        <BannerImage src={post.banner} alt={`Image by ${post.bannerCredits}`} />
      ) : null}
      <div className="c-post__content" itemProp="articleBody">
        {children}
      </div>
      <footer>
        <div className="c-post__share">
          <a
            className="c-post__share-link"
            target="blank"
            rel="noreferrer noopener"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              post.title
            )}%20${post.url}`}
          >
            <span className="u-sr-only">Share via Twitter</span>
            <svg className="c-post__share-icon">
              <use xlinkHref="#icon-twitter" />
            </svg>
          </a>
          <a
            className="c-post__share-link"
            target="blank"
            rel="noreferrer noopener"
            href={`https://www.facebook.com/sharer/sharer.php?u=${
              post.url
            }&title=${encodeURIComponent(post.title)}`}
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

interface IBannerImageProps {
  src: string;
  alt: string;
}

const BannerImage = ({ src, alt }: IBannerImageProps) => {
  return (
    <img
      className="c-post__banner"
      src={src}
      alt={alt}
      width="780px"
      height="auto"
      loading="eager"
    />
  );
};

export default PostLayout;
