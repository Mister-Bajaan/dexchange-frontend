import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

//Configuaryion pour utiliser le @ import  || alias
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "app/ui/components/"),
      "@modules": path.resolve(__dirname, "app/ui/modules/"),
      "@api": path.resolve(__dirname, "api/"),
    };

    return config;
  },
};

export default nextConfig;
