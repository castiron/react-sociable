import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
const packageJson = require('./package.json');

export default () => ({
    entry: {
        index: path.join(__dirname, 'src/index.js'),
    },
    target: "node",

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: packageJson.name,
        libraryTarget: 'umd',
    },

    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader',
            },
        ]
    },

    plugins: [
        // Clean dist folder
        new CleanWebpackPlugin(['dist/*.*']),
    ]
});