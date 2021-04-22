const path = require("path")
module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.ts",
        math: "./src/modules/math/index.ts",
        time: "./src/modules/time/index.ts"
    },
    output: {
        filename: "js/[name].js",
        chunkFilename: `js/[name].js`,
        libraryTarget: "umd",
        globalObject: "this",
        library: "example_utils"
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader", options: { allowTsInNodeModules: false }, exclude: "/node_modules/" },
        ],
    }
}