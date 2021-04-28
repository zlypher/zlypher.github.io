import Head from "next/head";
import Link from "next/link";

const HomeLayout = (props) => (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <div className="o-page-wrapper">
      <nav className="c-menu">
        <ul className="c-menu__list">
          <li className="c-menu__list-item">
            <a className="c-menu__link" href="/">
              Posts
            </a>
          </li>
          <li className="c-menu__list-item">
            <a className="c-menu__link" href="/talks">
              Talks
            </a>
          </li>
          <li className="c-menu__list-item">
            <a className="c-menu__link" href="/about">
              About Me
            </a>
          </li>
        </ul>
      </nav>
      <main className="o-main">{props.children}</main>
    </div>
  </>
);

export default HomeLayout;
