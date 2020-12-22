var fs = require("fs");

var data = fs.readFileSync('resources/demo.txt');
console.log(data.toString());
console.log("同步示例完成。")


console.log("开始异步读取文件")
fs.readFile('resources/demo.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
})
console.log("程序结束！")