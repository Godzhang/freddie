const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    mainFields: ['main', 'browser', 'module']
  },
  resolveLoader: {
    modules: ['node_modules', './loader']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: `[name]_[contenthash:8].css`
      filename: `[name].css`
　　})
  ],
  devtool: 'source-map'
}
