/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "t4.ftcdn.net",
      "media.istockphoto.com",
      "img.freepik.com",
      "t3.ftcdn.net",
      "webneel.com",
      "assets-global.website-files.com",
      "image.adsoftheworld.com",
      "i.pinimg.com",
      "thumbs.dreamstime.com",
      "cdn.logojoy.com",
      "www.kindpng.com",
      "images.meesho.com",
      "1000logos.net",
      "prod-assets-s3.faze.app",
      "tse1.mm.bing.net",
      "cdn3.vectorstock.com",
      "www.aacpl.net",
      "ksbrickey.files.wordpress.com",
      "www.bizadmark.com",
      "cdn.icon-icons.com",
      "upload.wikimedia.org",
      "example.com",
      "images.ctfassets.net",
      "instagram.fdel73-1.fna.fbcdn.net",
      "m.media-amazon.com",
      "www.influglue.com",
      "indianinfluencers.in",
      "storage.googleapis.com",
      "blog.chtrbox.com",
    ], // regarding Creater Card testing Image
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
