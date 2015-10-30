function route(handle, path) {
    console.log('Route to path: ' + path);
    if (typeof handle[path] === 'function') {
        return handle[path]();
    } else {
        console.log('No request handler found for path: ' + path);
        return '404 Not found.';
    }
}

exports.route = route;
