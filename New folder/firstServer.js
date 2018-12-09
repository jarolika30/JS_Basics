var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200,{"Content-Type" : "text/plain"});
	response.write("I am waiting for your request!");
	response.end();
}).listen(8080);

console.log("Server started.")