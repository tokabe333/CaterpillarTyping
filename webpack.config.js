const path = require('path');
const webpack   = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');


module.exports = [{
    entry   : {
        main: "./Sources/TS/main.ts",
    },
    output  : {
        path        :  __dirname + "/Sources/HTML/",
        filename    : "bundle.js",
        //publicPath  : "/js/",
    },
    devtool: "source-map",
    resolve : {
        extensions: [".ts", ".js"],
        //moduleDirectories: ["./node_modules"],
    },
    module : {
        rules:[
            {
                test: /\.js$/,
                loader: "source-map-loader",   
            },
            // {
            //     test    : /\.ts$/,
            //     loader  : "awesome-typescript-loader",
            //     exclude : [/node_modules/]
            // },
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
        ]
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin({
    //         extractComments: false,
    //         terserOptions:{
    //             output:{
    //                 comments: false,
    //                 beautify: false,
    //             },
    //             compress: {
    //                 drop_console: true,
    //                 dead_code: true,
    //                 properties: true,
    //                 drop_debugger: true,
    //                 conditionals: true,
    //                 booleans: true,
    //                 loops: true,
    //                 unused: true,
    //                 toplevel: true,
    //                 if_return: true,
    //                 inline: true,
    //                 join_vars: true,
    //                 warnings: true,
    //             },
    //             ecma: 6,
    //             mangle: {
    //                 keep_classnames: false,
    //                 keep_fnames: false,
    //                 safari10: true,
    //             },
    //             ie8: true,
    //             safari10: true,
    //         },
    //         parallel: false,
    //         cache: true,
    //     })],
    // },
}]