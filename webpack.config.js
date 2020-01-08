// 由于webpack是基于node进行构建的，所以，webpack的配置文件中，任何
// 合法的Node代码都是支持的
const path = require('path');

// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把
// 打包好的bundle.js注入页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个plugins节点

// 挂载的地插件，此刻能够获取他提供的构造函数htmlWebpackPlugin
const htmlWebpackPlugin = require('html-webpack-plugin')

// 当以命令行形式运行webpack或者web-dev-server的时候，工具会发现，
// 我们并没有提供要打包的文件的入口和出口文件，此时，他会检查项目根目录中的配置文件
// 并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象，
// 进行打包构建

// 导出对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口文件
    output: { //指定输出选项
        path: path.join(__dirname, './dist'), //指定输出的路径
        filename: 'bundle.js' //指定输出文件的名称
    },
    plugins: [ //所有webpack 插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//指定模板文件路径
            filename: 'index.html'//设置生成的内存页面的内容
        })
    ],
    // 配置所有第三方loader模块,(webpack并不能处理除了js之外的静态文件)
    module: {
        // 第三方模块的匹配规则，能够处理css、less、scss、jpng、font(字体)、js(转换高级的es6语法)、vue
    rules: [

        { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的loader
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },//处理less文件的loader
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },//处理scss文件的loader
        { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext}' },//处理图片的路径的loader
        { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },//处理字体文件的loader
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, //配置babel来转换高级es语法
        { test: /\.vue$/, use: 'vue-loader' }//处理.vue文件的loader

    ]

    // 在使用webpack构建的vue项目中使用模板对象
    // resolve: {
    //         alias: {//修改vue被导入时候的包的路径
    //             // 'vue$': 'vue/dist/v
    //         }
    //     }
    }
}

