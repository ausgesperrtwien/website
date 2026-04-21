import type { NextConfig } from "next";
import { EINSATZGEBIETE, getBezirkUrl } from "./src/lib/constants";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return EINSATZGEBIETE.map((e) => ({
      source: `/einsatzgebiete/${e.slug}`,
      destination: getBezirkUrl(e),
      permanent: true,
    }));
  },
};

export default nextConfig;
