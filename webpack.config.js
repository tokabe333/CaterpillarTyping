const path = require('path');
const webpack   = require("webpack");

module.exports = [{
    entry   : {
        main: "./Sources/TS/main.ts",
    },
    output  : {
        path        : "./Sources/JS",
        filename    : "[name].js",
        publicPath  : "/js/",
    },
    devtool: "source-map",
    resolve : {
        extensions: ["", ".ts", ".js"],
        moduleDirectories: ["node_modules"]
    },
    module  : {
        loaders : [
            {
                test    : /\.ts$/,
                loader  : "awesome-typescript-loader",
                exclude : [
                    /node_modules/,
                ],
            },
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
}]