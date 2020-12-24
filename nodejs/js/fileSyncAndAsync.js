var fs = require("fs");

var path = "../resources/demo.txt";
console.log("开始同步读取文件");
var data = fs.readFileSync(path);
console.log("fs.readFileSync 同步读取结果 = " + data);


console.log("\n开始异步读取文件");

fs.readFile(path, function(err, bufferdata) {
    if (err != null)
        return console.error(err);

    console.log("异步读取回调结果 = " + bufferdata);
});
console.log("fs.readFile 异步执行结束");