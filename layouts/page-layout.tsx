import BaseLayout from "./base-layout";

interface IPageLayoutProps {
  page: unknown;
  children: React.ReactNode;
}

const PageLayout = ({ children, page }: IPageLayoutProps) => (
  <BaseLayout>
    <section className="c-page">
      {/* {% if page.title %}
    <header className="c-page__header">
        <h1 className="c-page__title">{{ page.title }}</h1>
    </header>
    {% endif %} */}
      <div className="c-page__content">{children}</div>
    </section>
  </BaseLayout>
);

export default PageLayout;
