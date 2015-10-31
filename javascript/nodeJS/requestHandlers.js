var exec = require('child_process').exec;

function start(response) {
    console.log('Request handler start called.');
    cmd = 'python /Users/miaozheng/growth/javascript/nodeJS/sleep.py';
    exec(cmd, function(error, stdout, stderr) {
       response.writeHead(200, {'Content-Type': 'text/plain'}); 
       response.write(stdout); 
       response.end(); 
    });
}

function upload(response) {
    console.log('Request handler upload called.');
    response.writeHead(200, {'Content-Type': 'text/plain'}); 
    response.write('Hello, I am upload.'); 
    response.end(); 
}

exports.start = start;
exports.upload = upload;
