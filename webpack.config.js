const TreatPlugin = require('treat/webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const {join} = require('path');
const context = join(__dirname, 'src');

module.exports = {
    context,
    mode: 'production',
    entry: ['./index.js'],
    output: {
        path: join(context, '../dist/')
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new TreatPlugin({
            outputLoaders: [
                MiniCssExtractPlugin.loader
            ],
        }),
    ]
}