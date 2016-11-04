module.exports = {
entry: "./app/assets/frontend/main.jsx",
output: {
      path: __dirname + "/app/assets/javascripts",
      filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,         // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel",
            query:
              {
                presets: ['es2015','react']
              }
          }
      ]
  }
};
