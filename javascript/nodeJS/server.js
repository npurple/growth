var http = require('http');
var port = 8124;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}).listen(port);

console.log('Server has started on port: ' + port);
