const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000
                }
              }
            ]
          }
        ]
      },
      output: {
        filename: 'bundle.js'
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin(), new CleanWebpackPlugin(['dist'])]
    },
    modeConfig(mode),
    /**
     * Temporarly commented out due to presets absence.
     */
    // presetConfig({mode, presets})
  );
};
