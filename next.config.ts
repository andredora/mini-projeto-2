import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.wizardingworld.com"],
  },
  compiler: {
    styledComponents: true,
  },

};

export default nextConfig;
