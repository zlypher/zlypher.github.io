import Head from "next/head";
import Link from "next/link";
import { IPost } from "../lib/api";
import { formatDate } from "../lib/format-date";
import { getStaticProps } from "../pages/posts/[slug]";
import HomeLayout from "./home-layout";

interface IPageLayoutProps {
  page: unknown;
  children: React.ReactNode;
}

const PageLayout = ({ children, page }: IPageLayoutProps) => (
  <HomeLayout>
    <section className="c-page">
      {/* {% if page.title %}
    <header className="c-page__header">
        <h1 className="c-page__title">{{ page.title }}</h1>
    </header>
    {% endif %} */}
      <div className="c-page__content">{children}</div>
    </section>
  </HomeLayout>
);

export default PageLayout;
