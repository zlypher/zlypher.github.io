import { GetStaticProps } from "next";
import Link from "next/link";
import BaseLayout from "../layouts/base-layout";
import { getAllPosts, IPost } from "../lib/api";
import { formatDate } from "../lib/format-date";

interface IHomeProps {
  posts: IPost[];
}

export default function Home({ posts }: IHomeProps) {
  return (
    <BaseLayout>
      <h1 className="o-page-title">Thomas Prochazka
        <span className="o-page-title__sub">
          Dancer, Horseman and Software Engineer
        </span>
      </h1>
      <section className="c-post-overview">
        <aside className="o-sidebar">
          <section className="c-profile">
            <img
              className="c-profile__icon"
              src="https://www.gravatar.com/avatar/52a73317cd435a835d6cc927959f988c"
              alt="Thomas Prochazka Avatar"
            />
            <div className="c-profile__wrapper">
              <p className="c-profile__desc">
                Over 9 years of industry experience in professional web development with heavy focus on Maintainability, Code Quality and Web Performance.
              </p>
              <ul className="c-profile__contacts">
                <li className="c-profile__contact">
                  <a
                    href="https://www.linkedin.com/in/prochazkathomas/"
                    title="linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="u-sr-only">LinkedIn Profile</span>
                    <svg className="c-profile__contact-icon">
                      <use xlinkHref="#icon-linked" />
                    </svg>
                  </a>
                </li>
                <li className="c-profile__contact">
                  <a
                    href="https://github.com/zlypher"
                    title="github.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="u-sr-only">GitHub Profile</span>
                    <svg className="c-profile__contact-icon">
                      <use xlinkHref="#icon-github" />
                    </svg>
                  </a>
                </li>
                <li className="c-profile__contact">
                  <a
                    href="https://twitter.com/SyjinX"
                    title="twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="u-sr-only">Twitter Profile</span>
                    <svg className="c-profile__contact-icon">
                      <use xlinkHref="#icon-twitter" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </aside>
        <section className="c-post-list">
          {posts.map((p) => {
            const date = new Date(p.date);
            return (
              <article key={p.slug} className="c-post c-post--front">
                <time className="c-post__date" dateTime={date.toISOString()}>
                  {formatDate(date)}
                </time>
                <h2 className="c-post__title">
                  <Link href={`/posts/${encodeURIComponent(p.slug)}`}>
                    {p.title}
                  </Link>
                </h2>
              </article>
            );
          })}
        </section>
      </section>
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
