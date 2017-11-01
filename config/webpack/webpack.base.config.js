const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputPath = path.join(__dirname, '../../src/client/dist');
const sourthPath = path.join(__dirname, '../../src');

module.exports = {
  // 入口文件
  entry: {
    'index': './src/client/index.js',
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: outputPath, // output 目录对应一个绝对路径
    filename: "js/[name].js", // 此选项决定了每个输出 bundle 的名称。这些 bundle 将写入到 output.path 选项指定的目录下。
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['es2015', 'react']
          },
        }
      ]
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader"]
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      })
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourthPath,
      'node_modules'
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity,
      filename: 'js/[name].js'
    }),
  ]
}