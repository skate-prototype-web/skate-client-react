const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module : {
    rules: [
      {
        loader: 'babel-loader',
        test : /\.jsx?/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]      
          },
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
  watch: true,
};