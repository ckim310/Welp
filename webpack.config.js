// const path = require("path");
// const webpack = require("webpack");

// var plugins = [];
// var devPlugins = [];

// var prodPlugins = [
//   new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   }),
//   new webpack.optimize.UglifyJsPlugin({
//     compress: {
//       warnings: true
//     }
//   })
// ];

// plugins = plugins.concat(
//   process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
// );

// module.exports = {
//   context: __dirname,
//   entry: "./frontend/welp.jsx",
//   output: {
//     path: path.resolve(__dirname, "app", "assets", "javascripts"),
//     filename: "bundle.js"
//   },
//   plugins: plugins,
//   resolve: {
//     extensions: [".js", ".jsx", "*"]
//   },
//   devtool: "eval-source-map",
//   module: {
//     rules: [{
//       test: /\.(js|jsx)$/,
//       use: {
//         loader: 'babel-loader',
//         query: {
//           presets: ['@babel/preset-env', '@babel/preset-react']
//         }
//       },
//       exclude: /node_modules/
//     }]
//   }
// };

const path = require("path");

module.exports = {
  entry: path.join(__dirname, "frontend", "welp.jsx"),
  output: {
    path: path.join(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: "eval-source-map",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      exclude: /node_modules/
    }]
  }
};