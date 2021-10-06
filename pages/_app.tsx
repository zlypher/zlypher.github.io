import { IconSpritesheet } from "../components/icon-spritesheet";
import Script from "next/script";
import "../styles/main.scss";

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
