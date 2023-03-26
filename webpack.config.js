const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

// const webpack = require("webpack");
// module.exports = {
//     context: __dirname,
//     devtool: "source-map",
//     entry: "./app.js",
//     output: {
//         path: __dirname + "/dist",
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [{
//             test: /\.js$/i,
//             use: ["babel-loader"]
//             }
//         ]
//     }
// }