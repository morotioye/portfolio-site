/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ensure externals is an array if not already
      const externals = Array.isArray(config.externals) ? config.externals : [config.externals];

      config.externals = [
        ...externals,
        // Function to exclude 'canvas' during server-side build
        ({ request }, callback) => {
          if (request === 'canvas') {
            // Treat 'canvas' as an external dependency, not included in the server-side bundle
            return callback(null, 'commonjs ' + request);
          }
          callback();
        },
      ];
    } else {
      // Client-side specific configurations
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // Ignore 'canvas' in client-side bundles by providing a false value
        'canvas': false,
      };
    }

    // Configuration for handling .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'raw-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
