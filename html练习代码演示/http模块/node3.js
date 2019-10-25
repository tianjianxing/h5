var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");

http.createServer( function (request,response) {
	console.log(request.url);
	var filepath="";
	switch (request.url){
		case "/":
		filepath="/node3.html";
		break;
		default:
		filepath=request.url;
		break;
	}

	response.setHeader("Content-Type",mime.getType(path.basename(filepath)));
	var stream = fs.createReadStream(filepath.substr(1));
	var responseData = [];
	if(stream){
		stream.on("data",function(chunk){
			responseData.push(chunk);
		});
		stream.on("end",function(){
			var finalData = Buffer.concat(responseData);
			response.write(finalData);
			response.end();
		})
	}
}).listen(8085);

console.log("Server running at http://127.0.0.1:8085/");