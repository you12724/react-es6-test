var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        context: path.join(__dirname, 'js'),
        entry: {
            app: './app.js',
            sub: './sub.js'
        },
        output: {
            path: '../js',
            filename: '[name].js'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    screw_ie8: true
                },
                comments: false
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin()
        ],
        module: {
            loaders: [
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: "babel",
                    query:{
                        presets: ['react', 'es2015']
                    }
                }
            ]
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
    {
        context: path.join(__dirname, 'sass'),
        entry: {
            app: './app.scss',
            sub: './sub.scss'
        },
        output: {
            path: '../css',
            filename: '[name].css'
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-url&sourceMap&minimize!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('[name].css')
        ],
        devtool: 'source-map'
    }
];
