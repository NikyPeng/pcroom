/**
 * Created by glzc on 2018/3/12.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',            //production
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),              //本地服务器所加载的页面所在的目录
        historyApiFallback: true,           //不跳转
        inline: true,                        //实时刷新
        /*before: (app) => {
            console.log('******', path.resolve(__dirname, 'dist', 'index.html'));
            // 在你应用 JavaScript 文件中包含了一个 script 标签
            // 的 index.html 中处理任何一个 route
            app.get('*', function (request, response){
                response.sendFile(path.resolve(__dirname, 'index.html'))
            })
        }*/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '易通贷',
            template: path.resolve(__dirname, 'index.html')
        }),
    ]
}