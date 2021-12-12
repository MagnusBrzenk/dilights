const basePath =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_HREF || ""
    : "";

console.log("basePath", basePath);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath + "/",
};
