var http = require("http");
var url = require("url");
var util = require("util");

http.createServer(function(req, res) {
    // 设置响应头部信息及编码
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    //获取get请求后面带的参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站url = " + params.url);
    res.end();
    // res.end(util.inspect(url.parse(req.url, true)));


}).listen(3000);