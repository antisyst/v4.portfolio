/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      };
    }

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
