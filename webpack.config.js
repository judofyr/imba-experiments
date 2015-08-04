var webpack = require('webpack');

module.exports = {
  entry: './src/main',
  output: {
    filename: './lib/main.js'
  },

  module: {
    loaders: [
      { test: /\.imba$/, loader: './src/imba-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.imba']
  },

  plugins: [
    new webpack.DefinePlugin({
      "typeof window": JSON.stringify("object")
    })
  ]
};

