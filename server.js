var http = require('http');
var fs = require('fs');
var test = fs.readFileSync('test.html');
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(test);
}).listen(port);
