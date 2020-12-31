var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    // 解析请求，包括文件名
    var pathname = url.parse(req.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    if (!pathname.substr(1).match('index.html')) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("please try '" + req.headers.host + "/index.html'");
        res.end();
        return;
    }
    // 返回 上一级目录下的 index.html
    fs.readFile("../index.html", function(err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');