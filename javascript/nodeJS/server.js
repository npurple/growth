var http = require('http');
var url = require('url');
var port = 8124;

function start(route, handle) {
    function onRequest(request, response) {
        var path = url.parse(request.url).pathname;
        console.log('Request path: ' + path);
        route(handle, path, response);
    }

    http.createServer(onRequest).listen(port);
    console.log('Server has started on port: ' + port);
}

exports.start = start;
