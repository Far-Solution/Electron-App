const path = require("path");
const rules = require("./webpack.rules");
const CopyWebpackPlugin = require("copy-webpack-plugin");

rules.push(
  {
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      },
    ],
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/, // For image assets
    type: "asset/resource",
    generator: {
      filename: "assets/images/[name][ext]",
    },
  }
);

module.exports = {
  context: __dirname, // Set context to the root of the project
  module: {
    rules,
  },
  plugins: [
    // To copy public folder contents to the build folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, ".webpack/renderer/public"),
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  node: {
    __dirname: false, // Use the actual __dirname in the bundled code
    __filename: false, // Use the actual __filename in the bundled code
  },
  output: {
    path: path.resolve(__dirname, ".webpack/renderer"),
    filename: "renderer.js",
  },
}