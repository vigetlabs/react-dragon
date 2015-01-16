var Webpack = require('webpack');
var config  = require('./package');

module.exports = {

  entry: './src/index.js',

  output: {
    libraryTarget: 'umd',
    path: './dist',
    filename: config.name + '.js'
  },

  externals: {
    'react': 'react',
    'react/addons': 'react/addons'
  },

  plugins: [
    new Webpack.ProvidePlugin({
      to5Runtime: "imports?global=>{}!exports?global.to5Runtime!6to5/runtime"
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [ 'web_modules', 'node_modules', 'src' ]
  },

  module: {
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : '6to5?experimental&runtime&modules=common',
      },
      {
        test    : /\.json$/,
        loader  : 'json-loader'
      }
    ]
  }
}
