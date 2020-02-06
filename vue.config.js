module.exports = {
  devServer: {
    proxy: {
      "^/.netlify": {
        target: "http://localhost:34567"
      }
    }
  }
};
