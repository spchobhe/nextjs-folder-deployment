/** @type {import('next').NextConfig} */
const nextConfig = {
      reactStrictMode: true,
      distDir: 'docs',
       // Add basePath
      output: 'export',
      // Add basePath
      basePath: '/github-pages',      
}

module.exports = nextConfig
