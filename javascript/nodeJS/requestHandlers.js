var helper = require('./helper');

function start() {
    console.log('Request handler start called.');
    helper.sleep(1000 * 5);
    return 'Hello, I am start.';
}

function upload() {
    console.log('Request handler upload called.');
    return 'Hello, I am upload.';
}

exports.start = start;
exports.upload = upload;
