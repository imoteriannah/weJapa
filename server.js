var http = require("http");

var server = http.createServer(function(req,res){
	res.writeHead(200,{"content-Type": "text/plain"});
	res.end("Hello World, welcome to WeJapa Internships");
}).listen(3000);
console.log("server listening on port 3000");