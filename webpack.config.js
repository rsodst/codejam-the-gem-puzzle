const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/app/app.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/public/index.html`,
      inject: 'body',
    }),
  ],
  devServer: {
    contentBase: './src/public',
    port: 7700,
  },
};
