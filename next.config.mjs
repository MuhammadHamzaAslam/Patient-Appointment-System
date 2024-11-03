/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "preview.colorlib.com",
      },
    ],
  },
};

export default nextConfig;
