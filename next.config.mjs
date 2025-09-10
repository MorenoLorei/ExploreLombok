/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // static export
    images: {
        unoptimized: true, // disable server-side image optimization
    },
    // optional: set a base path if deploying to a subfolder
    // basePath: '',
};

export default nextConfig;
