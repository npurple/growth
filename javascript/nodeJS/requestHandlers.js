var qs = require('querystring');

function start(response, postData) {
    console.log('Request handler start called.');
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    responseBuilder(response, body, 200, 'text/html');
}

function upload(response, postData) {
    console.log('Request handler upload called.');
    // response('Hello, I am upload.');
    responseBuilder(response, qs.parse(postData).text);
}

function responseBuilder(response, cnt, code, type) {
    code =  code || 200;
    type = type || 'text/plain';
    cnt= cnt || 'Hahaha, nice to meet u boddy! long time no see';
    response.writeHead(code, {'Content-Type': type}); 
    response.write(cnt); 
    response.end(); 
}

exports.start = start;
exports.upload = upload;
