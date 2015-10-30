function route(handle, path) {
    console.log('Route to path: ' + path);
    if (typeof handle[path] === 'function') {
        handle[path]();
    } else {
        console.log('No request handler found for path: ' + path);
    }
}

exports.route = route;
