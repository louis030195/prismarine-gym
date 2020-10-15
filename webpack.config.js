const path = require('path');

module.exports = {
  // Change the entry point to run a different environment
  entry: './lib/env/Prismarine.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'Env'
  },
  mode: 'development'
};