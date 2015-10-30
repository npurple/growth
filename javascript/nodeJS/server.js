var http = require('http');
var port = 8124;

function onRequest(request, response) {
    console.log('Request received.');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}

http.createServer(onRequest).listen(port);
console.log('Server has started on port: ' + port);
