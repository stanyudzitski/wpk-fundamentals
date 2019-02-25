const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => ({
  output: {
    filename: '[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin(['dist/*.*'], [{root: path}])],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
});
