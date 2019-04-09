const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const optimizeCss = require('optimize-css-assets-webpack-plugin')

const isPord = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[ext]',
              publicPath: '../'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ],
    mainFields: ['main', 'browser', 'module']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8001,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 相对于output.path路径生成
      template: 'assets/index.html',
      title: 'webpack-1',
      favicon: './assets/love.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: isPord ? "css/[name].[chunkhash:8].css" : "css/[name].[hash:4].css",
      chunkFilename: "[id].css"
　　 }),
    new LodashModuleReplacementPlugin({
      shorthands: true
    })
  ],
  devtool: 'source-map'
}

module.exports = config
