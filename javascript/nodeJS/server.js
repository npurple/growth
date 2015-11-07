var http = require('http');
var url = require('url');
var port = 8124;

function start(route, handle) {
    function onRequest(request, response) {
        var postData = '';
        var path = url.parse(request.url).pathname;
        console.log('Request path: ' + path);

        request.encoding = 'utf-8';

        request.addListener('data', function(postDataChunk){
            postData += postDataChunk;
            console.log('Received Post Data chunk :' + postDataChunk);
        });

        request.addListener('end', function(){
            route(handle, path, response, postData);
        });

    }

    http.createServer(onRequest).listen(port);
    console.log('Server has started on port: ' + port);
}

exports.start = start;
