const path = require('path'),
      APP_DIR = path.resolve(__dirname, './client/src'),
      BUILD_DIR = path.resolve(__dirname, './client/dist'),
      { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: [ `@babel/polyfill`, `${APP_DIR}/index.js` ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test:/\.(s*)css$/,
        use:[
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    inline: true,
    historyApiFallback: true,
    host: 'localhost',
    port: 8081,
    proxy: {
      '^/api/*': {
        target: 'http://localhost:/api/',
        secure: false
      }
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
    }
  }
}
