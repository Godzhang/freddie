const isPord = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    require('postcss-cssnext')(),
    isPord && require('cssnano')(),
    require('postcss-pxtorem')({ //失败
      rootValue: 14
    })
  ]
}