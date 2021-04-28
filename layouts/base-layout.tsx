import Head from "next/head";
import Link from "next/link";

const BaseLayout = (props) => (
  <>
    <Head>
      <title>Software Engineering by Thomas Prochazka</title>
      <meta charSet="utf-8" />

      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Thomas Prochazka" />
      <meta
        name="description"
        content="A little Software Engineering Blog by Thomas Prochazka, filled with posts regarding engineering problems and solutions"
      />
      <meta
        name="keywords"
        content="Software Engineer, Software Development, Blog"
      />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="alternate"
        type="application/atom+xml"
        title="Software Engineering by Thomas Prochazka"
        href="/feed.xml"
      />
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

export default BaseLayout;
