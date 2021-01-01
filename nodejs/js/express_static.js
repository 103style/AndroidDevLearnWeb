var fs = require('fs')
var express = require('express');
var app = express();

var dir = '../../nodejs';
var name = '/shared/';
//将文件夹目录 ../../nodejs  指定为 localhost:8081/shared 访问
app.use(name, express.static(dir));

app.get('/', function(req, res) {
    var data = '试试 /shared 目录下的文件访问';

    var url = req.headers.host;
    console.log("url = " + url);
    fs.readdir(dir, function(err, files) {
        files.forEach(function(file) {

            data += '<br><br> <a href=' + name + file + ' target="_blank">' + file + '</a>'
            console.log(file);
        })
        res.send(data);
    });
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})