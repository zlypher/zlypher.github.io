import { GetStaticProps } from "next";
import BaseLayout from "../layouts/base-layout";
import { getLatestPosts, IPost } from "../lib/api";

interface ICustom404Props {
  latestPosts: IPost[];
}

export default function Custom404({ latestPosts }: ICustom404Props) {
  return (
    <BaseLayout>
      <div className="c-error">
        <img
          className="c-error__banner"
          src="/assets/images/error_banner_optim.jpg"
        />
        {/* Photo by <a href="https://unsplash.com/@bamin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pierre Bamin</a> on <a href="https://unsplash.com/photos/5B0IXL2wAQ0">Unsplash</a> */}
        <h1 className="c-error__title">
          Oh no! What you are looking for is not here!
        </h1>

        <p>
          You can try to <a href="/">go back to the start page</a> or check out
          any of the recent posts.
        </p>
        <aside className="c-error__latest">
          {latestPosts.map((p) => (
            <a key={p.slug} href={p.url}>
              <article className="c-post-preview">
                <h2 className="c-post-preview__title">{p.title}</h2>
                <time className="c-post-preview__date">{p.date}</time>
              </article>
            </a>
          ))}
        </aside>
      </div>
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps<ICustom404Props> = async () => {
  const latestPosts = getLatestPosts(3);

  return {
    props: {
      latestPosts: [...latestPosts],
    },
  };
};
