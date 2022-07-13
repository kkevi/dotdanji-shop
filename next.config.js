/** @type {import('next').NextConfig} */

// const path = require("path")
// const withImages = require("next-images")
// module.exports = withImages({
//     exclude: path.resolve(__dirname, "src/assets/svg"),
//     webpack(config, options) {
//         return config
//     },
// })

//

const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                destination: `${process.env.NEXT_PUBLIC_AWS_API_URL}/:path*`,
                source: `/api/:path*`,
            },
        ]
    },
}

module.exports = nextConfig
