module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.22.25.206:8081',
      },
    },
  },
};
