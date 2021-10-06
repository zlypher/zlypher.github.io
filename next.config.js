const ghPages = process.env.DEPLOY_TARGET === "gh-pages";
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  assetPrefix: ghPages ? "/zlypher.github.io/" : "",
});
