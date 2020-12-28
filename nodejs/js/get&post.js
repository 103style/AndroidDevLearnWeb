var http = require("http");
var url = require("url")
var querySring = require("querystring");
var util = require("util");

var express = require('express');
var app = express();

app.all('*', function(req, res, next) {　　 //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");　　 //允许的header类型
    res.header('Access-Control-Allow-Headers', 'Content-type');　　 //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");　　 //可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
    res.header('Access-Control-Max-Age', 1728000); //预请求缓存20天
    next();
});


http.createServer(function(req, res) {
    var postData = '';

    req.on('data', function(chunk) {
        postData += chunk;
    })

    req.on('end', function() {
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-type',
            "Content-Security-Policy": "default-src https: http: 'unsafe-inline' 'unsafe-eval';connect-src https: http:"
        });

        postData = querySring.parse(postData);
        if (postData.name && postData.author && postData.url) {
            res.write(postData.name);
            res.write(postData.url);
            res.write(postData.author);
        }
        console.log(util.inspect(postData));
        res.end();
    });
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-type'
    });
    res.write("103Tech");
    res.write("\n");
    res.write("103style.top");
    res.write("\n");
    res.write("103style");
    res.end();

}).listen(5000);