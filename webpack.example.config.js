var Webpack = require('webpack');

module.exports = {
  entry: {
    'example.build': './example/index.js'
  },

  output: {
    filename: 'example.build.js',
    path: './example',
    devtoolModuleFilenameTemplate: '[resource-path]'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [ 'web_modules', 'node_modules' ]
  },

  plugins: [
    new Webpack.ProvidePlugin({
      to5Runtime: "imports?global=>{}!exports?global.to5Runtime!6to5/runtime"
    })
  ],

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
