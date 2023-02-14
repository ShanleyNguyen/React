const Dotenv = require('dotenv-webpack');
 
module.exports = {
  plugins: [
    new Dotenv({
        path: './env'
    })
  ],
  resolve: {
    fallback: {
      "fs": false,
      "os": false,
      "path": false
    },
  }
};