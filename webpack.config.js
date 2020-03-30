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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
            terserOptions:{
                output:{
                    comments: false,
                    beautify: false,
                },
                compress: {
                    drop_console: true,
                },
                ecma: 6,
                mangle: true,
                ie8: true,
                safari10: true,
                keep_classnames: false,
                keep_fnames: false,
            },
            parallel: true,
            minify: (file, sourceMap) => {
                // https://github.com/mishoo/UglifyJS2#minify-options
                const uglifyJsOptions = {
                    /* your `uglify-js` package options */
                };
                if (sourceMap) {
                    uglifyJsOptions.sourceMap = {
                    content: sourceMap,
                    };
                }
                return require('uglify-js').minify(file, uglifyJsOptions);
            },
        })],
    },
}]