module.exports = {
  devServer: {
    proxy: {
      "^/.netlify": {
        target: "https://deploy-preview-43--glenanpechesportive.netlify.app"
      }
    }
  }
};
