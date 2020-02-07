const http = require('http');
const router = require('./router');

http.createServer(function (request, response) {
	return router.getRoute(request, response);
}).listen(3000);
