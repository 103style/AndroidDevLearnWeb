var http = require('http');

var options = {
    host: 'localhost',
    port: '8000',
    path: '/index.html'
};

// 向服务端发送请求
var req = http.request(options, function(res) {
    // 不断更新数据
    var body = '';
    res.on('data', function(data) {
        body += data;
    });

    res.on('end', function() {
        // 数据接收完成
        console.log(body);
    });
});
req.end();