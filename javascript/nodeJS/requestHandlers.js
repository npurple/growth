function start() {
    console.log('Request handler start called.');
    return 'Hello, I am start.';
}

function upload() {
    console.log('Request handler upload called.');
    return 'Hello, I am upload.';
}

exports.start = start;
exports.upload = upload;
