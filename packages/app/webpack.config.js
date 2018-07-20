const path = require('path')
const webpack = require('webpack')
const NodeExternals = require('webpack-node-externals')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const src = path.resolve(__dirname, 'src')
const node_modules = path.resolve(__dirname, 'node_modules')

const mode = process.env.MODE || 'development'

const type = {
  desktop: 'client',
  mobile: 'client',
  server: 'server'
}

const name = {
  desktop: 'client.desktop',
  mobile: 'client.mobile',
  server: 'server'
}

const target = {
  desktop: 'web',
  mobile: 'web',
  server: 'node'
}

const entry = {
  desktop: {
    index: mode === 'development' ? [
      'webpack-hot-middleware/client?name=client.desktop',
      path.resolve(src, 'desktop')
    ] : [
      path.resolve(src, 'desktop')
    ]
  },
  mobile: {
    index: mode === 'development' ? [
      'webpack-hot-middleware/client?name=client.mobile',
      path.resolve(src, 'mobile')
    ] : [
      path.resolve(src, 'mobile')
    ]
  },
  server: {
    index: [
      path.resolve(src, 'server')
    ]
  }
}

const externals = {
  web: [],
  node: NodeExternals()
}

const filename = {
  web: '[name].[hash].js',
  node: '[name].js'
}

const chunkFilename = {
  web: '[name].[chunkhash].js',
  node: '[name].js'
}

const optimization = {
  web: {
    minimizer: [
      new UglifyPlugin({
        uglifyOptions: {
          mangle: {
            keep_fnames: true
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: false,
        common: {
          name: 'common',
          minChunks: 2,
          enforce: true,
        },
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          test: /\/node_modules\//,
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  node: {}
}

const config = (id) => ({
  mode,
  target: target[id],
  name: name[id],
  devtool: 'inline-source-map',
  externals: externals[target[id]],
  entry: entry[id],
  output: {
    path: path.resolve(__dirname, 'lib', type[id]),
    publicPath: '/static/',
    filename: filename[target[id]],
    chunkFilename: chunkFilename[target[id]],
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'source-map-loader',
        include: [
          node_modules
        ],
        exclude: [
          src
        ],
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          },
        ],
        exclude: [
          node_modules
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, `tsconfig.build.${type[id]}.json`)
            }
          }
        ],
        exclude: [
          node_modules
        ]
      },
      {
        test: /\.(?:png|jpg|gif|ico|eot|woff|woff2|ttf|svg)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              emitFile: target[id] === 'web'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      logLevel: 'silent',
      reportFilename: path.resolve(__dirname, 'lib', `report.${id}.html`),
      generateStatsFile: true,
      statsFilename: path.resolve(__dirname, 'lib', `stats.${id}.json`)
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode)
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: optimization[target[id]],
  stats: 'errors-only'
})

module.exports = [
  config('desktop'),
  config('mobile'),
  config('server')
]
