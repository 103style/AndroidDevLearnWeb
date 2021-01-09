const autoprefixer = require('autoprefixer')

//优化css代码
config = {
    plugins:[
        //自动处理浏览器前缀
        autoprefixer()  
    ]
}

module.exports = config;