var http = require("http");
var querystring = require("querystring");
// var util = require("util");


var postHTML =
    '<html><head><meta charset="utf-8"><title>103Tech</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function(req, res) {
    var postBody = '';
    req.on('data', function(chunk) {
        postBody += chunk;
    });
    req.on('end', function() {
        postBody = querystring.parse(postBody);

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

        if (postBody.name && postBody.url) {
            res.write("网站名：" + postBody.name);
            res.write("<br>");
            res.write("网站url = " + postBody.url);
        } else {
            res.write(postHTML);
        }
        res.end();
        // res.end(util.inspect(postBody));
    });

}).listen(3000);