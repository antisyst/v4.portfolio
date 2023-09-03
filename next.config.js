/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
    const CompressionPlugin = require("compression-webpack-plugin");

    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      };

      config.optimization.minimize = true;
      config.optimization.minimizer = [
        new OptimizeCSSAssetsPlugin({}),
      ];

      // Compression
      config.plugins.push(new CompressionPlugin());

      // Image Optimization
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      });

      config.devtool = 'eval-source-map';
    }

    return config;
  },
};

module.exports = nextConfig;
