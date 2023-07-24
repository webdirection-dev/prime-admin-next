/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverActions: true
    },
    images: {
        // formats: ['image/avif, image/webp'],
        domains: ['github.com', 'lh3.googleusercontent.com']
    }
}
module.exports = nextConfig