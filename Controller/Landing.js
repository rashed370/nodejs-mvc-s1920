const fs = require('fs');

exports.index = function(request, response) {
    let fileName = "./View/landing.html";

    if(fs.existsSync(fileName)) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(fileName).pipe(response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end("404 Not Found");
    }

    return;
}