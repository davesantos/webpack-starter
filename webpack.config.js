var path = require('path');
module.exports =  {
  context: path.join(__dirname, 'js'),
  mode: 'none',
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  }
};