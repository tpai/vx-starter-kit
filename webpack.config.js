var webpack = require('webpack');
var path = require('path')

module.exports = {
    entry: {
        app: "./index",
        vendor: ["vue", "redux", "revue"]
    },
    resolve: {
        root: [ path.resolve("./src") ],
        extensions: ["", ".js", ".vue"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            __DEVELOPMENT__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development'))
        })
    ]
}
