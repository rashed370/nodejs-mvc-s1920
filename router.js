const fs = require('fs');
const url = require('url');
const path = require('path');
const controlPaths = path.join(__dirname, 'Controller');
let controllers = [];

fs.readdirSync(controlPaths).forEach(function(controller){
    let extension = path.extname(controller);
    if(extension=='.js') {
        let key = path.basename(controller, extension);
        controllers[key.toLocaleLowerCase()] = require(controlPaths+'\\'+key);
    }
});

exports.getRoute = function(request, response) {
    let reqPath = url.parse(request.url, true);
    let baseName = reqPath.pathname == '/' ? 'landing' : path.basename(reqPath.pathname); 
    if(baseName in controllers) {
        return controllers[baseName].index(request, response);
    }
    response.writeHead(404, {'Content-Type': 'text/html'});
    return response.end("404 Not Found");
}