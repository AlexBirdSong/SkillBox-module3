const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

const NODE_ENW = process.env.NODE_ENW;
const IS_DEV = NODE_ENW === 'development';
const IS_PROD = NODE_ENW === 'production';

function setupDevtool(){
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}
 
module.exports = {
    resolve:{
        extensions: ['.js','.jsx','.ts','.tsx','.json']
    },
    mode: NODE_ENW ? NODE_ENW : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
                {
                    test:  /\.[tj]sx?$/,
                    use: ['ts-loader']
                },
            {
            test:  /\.less$/,  // /\.css$/,
            use : [
            'style-loader', 
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }
                },
                'less-loader',
            ],   
        }
    ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV
    },
    devtool: false,
};
