const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: `${__dirname}/docs`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [new MonacoWebpackPlugin()],
  performance: {
    hints: false
  },
  devServer: {
    static: {
      directory: `${__dirname}/docs`
    },
    port: 3000,
    hot: true,
    open: true
  }
};
