/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "**.amazonaws.com",
            },
        ],
        // Force re-optimization on new deploys
        minimumCacheTTL: 0,        // or 60 for short cache
        // OR completely disable optimization temporarily for debugging
        // unoptimized: true,
    },
    devIndicators: {
        appIsrStatus: false,
        buildActivity: false,
    },
};

export default nextConfig;
