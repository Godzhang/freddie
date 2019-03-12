const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isPord = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js'
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
      }
      // {
      //   test: /\.(jpg|png|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 相对于output.path路径生成
      template: 'assets/index.html',
      title: 'webpack-1',
      favicon: './assets/love.ico'
    }),
    new MiniCssExtractPlugin({
      filename: isPord ? "css/[name].[chunkhash:8].css" : "css/[name].css",
      chunkFilename: "[id].css"
　　 })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8001,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}

module.exports = config
