/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "imgix",
        path: "",
    },

    async rewrites() {
        return [
            {
                destination: `${process.env.NEXT_PUBLIC_AWS_API_URL}/:path*`,
                source: "/api/:path*",
            },
        ]
    },
}

module.exports = nextConfig
