/** @type {import('next').NextConfig} */

const { withLogtail } = require("@logtail/next");

module.exports = withLogtail({
  // Your existing config
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});
