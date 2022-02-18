import { IconSpritesheet } from "../components/icon-spritesheet";
import Script from "next/script";
import "../styles/main.scss";
import "highlight.js/styles/stackoverflow-dark.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.splitbee.io/sb.js" />
      <IconSpritesheet />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
