function route(handle, path, response, postData) {
    console.log('Route to path: ' + path);
    if (typeof handle[path] === 'function') {
        return handle[path](response, postData);
    } else {
        console.log('No request handler found for path: ' + path);
        response.writeHead(404, {'Content-Type': 'text/plain'}); 
        response.write('404 Not found.'); 
        response.end(); 
    }
}

exports.route = route;
