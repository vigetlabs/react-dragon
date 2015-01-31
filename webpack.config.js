module.exports = {

  entry: {
    'example.build': './example/index.js'
  },

  output: {
    path: './example'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [ 'web_modules', 'node_modules' ]
  },

  module: {
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : '6to5?experimental',
      },
      {
        test    : /\.json$/,
        loader  : 'json-loader'
      }
    ]
  }
}
