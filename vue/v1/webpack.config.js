const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)

const config = {
  mode: 'development',
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV === 'serve' ? '/' : '/dist/',
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[id].[hash:8].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors'
        }
      }
    }
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('./src'),
      'mixins': resolve('./src/mixins'),
      'utils': resolve('./src/utils')
    },
    extensions: ['.js', '.vue', '.json']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    index: 'index.html',
    port: 8001,
    overlay: true,
    hot: true,
    compress: true,
    clientLogLevel: 'none'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.(jpg|png|gif|svg|eot|woff2?|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]?[hash:8]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      cache: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    })
  ]
}

module.exports = config
