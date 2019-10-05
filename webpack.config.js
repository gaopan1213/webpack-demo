const path = require("path");
module.exports = {
    entry: {
        index: "./src/index.js",
        hello: "./src/hello.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name]-[hash].js",
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(png|gif|jpg|jpeg)/,
                use: "file-loader",
            }
        ]
    }
}