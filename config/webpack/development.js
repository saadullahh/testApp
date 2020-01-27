process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
var path = require('path');

module.exports = environment.toWebpackConfig()
module.exports = {
    // ...your other configs
    devServer: {
      contentBase: path.join(__dirname, '../'),
      port: 8080,
      publicPath: 'http://localhost:8080/', // Path of your dev server
      historyApiFallback: true, // add this if you are not using browser router
      proxy: {
        '/api': { // string to look for proxying requests to api
          target: 'http://localhost:3000', // Path of your rails api server
        },
      },
    },
    // ...your other configs
  }