const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

//package.json 中的 scripts 中配置的
const isDev = process.env.NODE_ENV === 'development'

const config = {
    //或者在 package.json 的 scripts 中配置 webpack --mode=development
    //mode: 'development',
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
                //配置.vue文件的loader
                test: /\.vue$/, //检测的文件类型
                loader: 'vue-loader',
            },{
                 test: /\.styl$/,
                 use: [
                     'style-loader',
                     'css-loader',
                     'stylus-loader'
                 ]
             }, {
                test: /\.css$/i, //i表示大小写不敏感
                use: ['style-loader', 'css-loader' ]
            }, {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024, //文件大小小于1024 就将其变成 base64写到html中
                        name: '[name]-aaa.[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin(),
    ]
}


if (isDev) {
    config.devServer = {
        port: 8081,
        host: '127.0.0.1',
        overlay: {
            errors: true
        },
        //启动成功 自动打开html页面
        open: true,
        //配置不能访问的地址 重定向到 一个固定的页面
        // historyFallback: {
        // }
    }
}

module.exports = config