const ghPages = process.env.DEPLOY_TARGET === "gh-pages";
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  // Not supported with next export
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en"
  // },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  assetPrefix: ghPages ? "/tompka.io/" : "",
});
