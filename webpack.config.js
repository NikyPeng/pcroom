/**
 * Created by pengcheng on 2016/11/17.
 */
module.exports = {
    entry : __dirname + '/app/main.js',    //入口文件
    output : {
        path : __dirname + '/public',    //打包后的文件存放的地方
        filename : 'bundle.js'           //打包后输出的文件名
    }
};