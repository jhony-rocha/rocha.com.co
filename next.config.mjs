import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    outputFileTracingIncludes: {
      '/articles/*': ['./src/app/articles/**/*.mdx'],
    },
  },
  webpack: (config, { dev, isServer }) => {
    if (!isServer && process.env.CYPRESS_COVERAGE) {
      config.module.rules.push({
        test: /\.[jt]sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['istanbul'],
          },
        },
      });
    }
    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
