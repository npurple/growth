var http = require('http');
var url = require('url');
var port = 8124;

function start(route) {
    function onRequest(request, response) {
        var path = url.parse(request.url).pathname;
        console.log('Request path: ' + path);

        route(path);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(port);
    console.log('Server has started on port: ' + port);
}

exports.start = start;
