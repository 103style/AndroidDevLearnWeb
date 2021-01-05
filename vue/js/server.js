var http = require('http')
var url = require("url");
var fs = require('fs')
var util = require('util')
var querySring = require("querystring");
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');

http.createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Expose-Headers", "*");

    var method = req.method;
    if (method === 'OPTIONS' || method === 'POST') {
        handlePost(req, res);
    } else {
        handleGet(req, res);
    }
}).listen(8081);


function handleGet(req, res) {
    res.writeHead(200, 'Content-Type', 'application/json;charset=utf-8');
    //获取get请求后面带的参数
    var params = url.parse(req.url, true).query;
    if (params && params.name && params.url) {
        res.write("网站名：" + params.name);
        res.write("\n");
        res.write("网站url = " + params.url);
        res.end();
    } else {
        fs.readFile('../resource/demo.txt', function(err, data) {
            if (err) return res.end(err);
            // console.log("read success. \n" + data);
            res.write(data);
            res.end();
        })
    }
}

function handlePost(req, res) {
    var postData = '';
    req.on('data', function(chunk) {
        postData += chunk;
    })
    req.on('end', function() {
        res.writeHead(200, 'Content-Type', 'application/json;charset=utf-8');
        //解析POST参数
        postData = querySring.parse(postData);
        res.end(util.inspect(postData));
    });
}