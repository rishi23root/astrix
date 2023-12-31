/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    headers() {
    // https://report-uri.com/home/generate to solve it 
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value:
                            `default-src * 'self' data: 'unsafe-inline' 'unsafe-hashes' 'unsafe-eval' 0.0.0.0; media-src * 'self'`,
                    }
                ],
            },
        ];
    },
}


module.exports = nextConfig
