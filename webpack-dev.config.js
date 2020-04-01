const path = require('path');
const webpack   = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');

var terser = new TerserPlugin({
    extractComments: false,
    terserOptions:{
        output:{
            comments: false,
            beautify: false,
            ecma: 6,
            indent_level: 0,
            indent_start: 0,
        },
        compress: {
            //drop_console: false,
            dead_code: true,
            properties: true,
            drop_debugger: true,
            conditionals: true,
            booleans: true,
            loops: true,
            unused: true,
            toplevel: true,
            if_return: true,
            inline: true,
            join_vars: true,
            warnings: false
        },
        ecma: 6,
        mangle: {
            keep_classnames: false,
            keep_fnames: false,
            safari10: true
        },
        ie8: true,
        safari10: true
    },
    parallel: false,
    cache: true
});

module.exports = [{
    entry: {
        main: "./Sources/TS/main.ts",
    },
    output: {
        path: __dirname + "/Sources/HTML/",
        filename: "bundle.js",
        //publicPath  : "/js/",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"],
        //moduleDirectories: ["./node_modules"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "source-map-loader",
            },
            // {
            //	 test	: /\.ts$/,
            //	 loader  : "awesome-typescript-loader",
            //	 exclude : [/node_modules/]
            // },
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    optimization: {
        minimize: false,
        //minimizer: [terser],
        splitChunks: {
            cacheGroups: {
            phaser: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "0",
                    chunks: "initial",
                    priority: -10,
                    enforce: true
                }
            }
        }
    }
}];