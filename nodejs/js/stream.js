var fs = require("fs")
var zlib = require('zlib');

var url = '../resources/stream.txt'
var zipurl = '../resources/stream.txt.gz'

writeTest();

function writeTest() {
    console.log("写入流示例:");

    //要写入的数据
    var writedata = '103style.github.io, 103Tech, Welcome!';
    //创建写入流 以及设置编码
    var writeStream = fs.createWriteStream(url, 'UTF8');
    //写入数据
    writeStream.write(writedata);
    //标记结束
    writeStream.end();

    // 处理流事件 --> finish、error
    writeStream.on('finish', function() {
        console.log("写入完成。");

        //开始读文件
        readtest();
    });

    writeStream.on('error', function(err) {
        console.log(err.stack);
    });
}


function readtest() {
    //读取流示例
    console.log("读取流示例:");

    var data = ''

    //创建流
    var readStream = fs.createReadStream(url);
    //设置编码
    readStream.setEncoding('UTF8')

    // 处理流事件 --> data, end, and error
    readStream.on('data', function(chunk) {
        data += chunk;
    })

    readStream.on('end', function() {
        console.log("read file content = \n" + data);

        //执行 管道流 链式流
        chainStream();
    })

    readStream.on('error', function(err) {
        //出现错误
        console.log(err.stack)
    })
}


function chainStream() {
    fs.createReadStream(url)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(zipurl, 'UTF8'));

    console.log("chainStream finish");
}