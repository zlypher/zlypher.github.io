import { IconSpritesheet } from "../components/icon-spritesheet";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <IconSpritesheet />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
