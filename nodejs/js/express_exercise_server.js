var express = require('express');
var app = express();

var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');

var cookieParser = require('cookie-parser')
var util = require('util');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));
app.use(cookieParser())

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var name = '/shared/';
var dir = '../../nodejs/';

var wx = '103Tech'
var web = '103style.top'
app.use(name, express.static(dir));

app.get('/', function(req, res) {
    var path = name + "express_exercise.html";
    console.log("path = " + path);

    console.log("Cookies: " + util.inspect(req.cookies));
    // res.sendFile(path);
    res.redirect(path);
});


//get请求
app.get('/get', function(req, res) {
    var response = {
        "wx": wx,
        "web": web
    };
    var jsonstring = JSON.stringify(response);
    console.log("get response = " + jsonstring)
    res.end(jsonstring);
});

//post请求 更新数据
app.post('/post', urlencodedParser, function(req, res) {
    var response = {
        "wx": req.body.wx,
        "web": req.body.web
    };
    var jsonstring = JSON.stringify(response);
    console.log("post response = " + jsonstring)
    res.end(jsonstring);
});



//文件上传
app.post('/file_upload', function(req, res) {

    var file = req.files[0];
    console.log(file); // 上传的文件信息

    var des_file = dir + file.originalname;

    fs.readFile(file.path, function(err, data) {

        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            var jsonstring = JSON.stringify(response);
            console.log(jsonstring);
            res.end(jsonstring);
        });
    });
})

//Cookie 管理

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});