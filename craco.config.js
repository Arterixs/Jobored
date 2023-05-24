const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@app': path.resolve(__dirname, 'src/app/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@data': path.resolve(__dirname, 'src/data/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@types': path.resolve(__dirname, 'src/types/'),
    },
  },
};
