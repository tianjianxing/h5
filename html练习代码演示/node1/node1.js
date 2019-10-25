// var bin = new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
// console.log(bin.length);
// console.log(bin[0]);

// var str = bin.toString("utf-8");
// console.log(str);

// var bin1 = new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
// bin1[0] = 0x48;
// console.log(bin1.toString("utf-8"));

// var bin2 = bin1.slice(3);
// console.log(bin2);
// bin2[0] = 0x48;
// console.log(bin2);
// console.log(bin1.toString("utf-8"));

// var bin3 = new Buffer(bin1.length);
// console.log(bin3);
// bin1.copy(bin3);
// console.log(bin3);

var fs = require('fs');
// fs.readFile("1.txt","utf-8",function(err,data){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(data);
// 	}
// })
// console.log("ok");

// var data = fs.readFileSync("1.txt","utf-8");
// console.log(data);
// console.log("ok");


// var datas = "This is my data";
// fs.writeFile("1.txt",datas,function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("success");
// 	}
// })

// fs.stat("1.txt",function(err,stat){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(stat);
// 		console.log(stat.isFile());
// 		console.log(stat.isDirectory());
// 	}
// })

// var ss = fs.statSync("1.txt");
// console.log(ss);

// fs.appendFile("1.txt","9999999999",function(err,data){

// })
// fs.appendFileSync("1.txt","666666666")

// var data = "";
// var rs = fs.createReadStream("1.txt");
// rs.setEncoding("utf-8");
// rs.on("data",function(chunk){
// 	data += chunk;
// 	console.log(chunk.length);
// })
// rs.on("end",function(){
// 	console.log(data);
// })
// rs.on("error",function(err){
// 	console.log(err.stack);
// })

var data = "aaaaaaaa";
var ws = fs.createWriteStream("1.txt");
ws.write(data,"utf-8");
ws.end();
ws.on("finish",function(){
	console.log("finish");
})

var rs = fs.createReadStream("1.txt","utf-8");
var ws = fs.createWriteStream("2.txt");
// rs.on("data",function(chunk){
// 	ws.write(chunk,"utf-8");
// })
// ws.on("end",function(){
// 	ws.end();
// })

rs.pipe(ws);