const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: require.resolve("babel-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: `./src/index.html`
        })
    ]
};
