var util = require('util')
var express = require("express");
var app = express();


app.get('/', function(req, res) {
    res.send("Hello World! <br>" +
        "<br><b>Request:</b> " +
        "<br>baseUrl = " + req.baseUrl +
        "<br>body  = " + req.body +
        "<br>fresh  = " + req.fresh +
        "<br>hostname = " + req.hostname +
        "<br>originalUrl = " + req.originalUrl +
        "<br>params = " + util.inspect(req.params) +
        "<br>path = " + req.path +
        "<br>protocol = " + req.protocol +
        "<br>query = " + util.inspect(req.query) +
        "<br>route = " + util.inspect(req.route) +
        "<br>subdomains = " + req.subdomains +
        "<br>accepts() = " + req.accepts() +
        "<br><br> <a style='text-decoration:none' href='json'>试试 res.json(json字符串) 返回json内容</a>" +
        "<br><br> <a style='text-decoration:none' href='redirect'>通过 res.redirect('http://www.baidu.com') 重定向到百度</a>"
    );
});

app.get('/json/', function(req, res) {
    res.json({ "stuff_id": "15621305", "email": "123456@qq.com", "role": 0, "uid": " 15404799700657", "create_time": "2020-12-31T15:50:42.17+08:00", "last_login": 0 });
});

app.get('/redirect/', function(req, res) {
    res.redirect("http://www.baidu.com");
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});