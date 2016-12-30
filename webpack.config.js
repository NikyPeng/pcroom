/**
 * Created by pengcheng on 2016/11/17.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry : __dirname + '/app/main.js',    //入口文件
    output : {
        path : __dirname + '/public',    //打包后的文件存放的地方
        filename : 'bundle.js'           //打包后输出的文件名
    },
    module : {
        loaders : [
            //.css文件使用style-loader和css-loader来处理,"-loader"可以省略不写，多个loader用!连接
            {
                test:/\.css$/,
                loader : ExtractTextPlugin.extract("style-loader","css-loader",{ publicPath : '../'})
            },
            //.scss文件使用style-loader、css-loader和sass-loader来编译处理
            {
                test:/\.scss$/,
                loader : "style!css!sass?sourceMap"
            },
            //图片文件使用url-loader来处理，小于8kb的直接转为base64，不会打包html通过img标签引入的图片，所以最好换成css-background引入
            {
                test:/\.(png|jpg)$/,
                loader : "url-loader?limit=8192&name=img/[name].[ext]"
            },
            //加载babel-loader 
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader : 'babel',
                query :{
                    presets : ['es2015','react']
                }
            }]
    },
    plugins : [
        new ExtractTextPlugin("./css/style.css",{
            allChunks : true,
            disable : false
        })
    ]
};