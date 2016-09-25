var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
  entry: {
    'polyfills' : './src/polyfills.ts',
    'vendor' : './src/vendor.ts',
    'app-config' : './src/app-config.ts'
  },

  output: {
    path : './src/prod'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['app-config', 'vendor', 'polyfills'], minChunks: Infinity }),
    new webpack.optimize.DedupePlugin()
  ],

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  }
};

var defaultConfig = {
  devtool: 'cheap-module-source-map',
  cache: true,
  debug: true,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    preLoaders: [
      { test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [
          path.join(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          path.join(__dirname, 'node_modules', 'rxjs'),
          path.join(__dirname, 'node_modules', '@angular2-material')
        ]
      }
    ],
    noParse: [
      path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
      path.join(__dirname, 'node_modules', '@angular', 'bundles')
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js']
  },

  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  }
};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
