const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpakPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(sass|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(gif|jpg|png|jpeg)$/,
                use: "file.loader",
            },
            {
                test: /\.vue$/,
                use: "vue-loader",
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
        new CopyWebpakPlugin([{
            from: path.resolve(__dirname, "./public"),
        }]),
        new VueLoaderPlugin(),
    ],
    devServer: {
        port: 9090,
        contentBase: path.resolve(__dirname, "./dist"),
    }
}