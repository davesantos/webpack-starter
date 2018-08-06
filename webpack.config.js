const path = require('path');
module.exports =  {
  context: path.join(__dirname, 'src'),
  mode: 'none',
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    // contentBase: path.join(__dirname, 'js')
    stats: 'errors-only'
  }
};