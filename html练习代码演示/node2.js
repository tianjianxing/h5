// var url = require("url");
// var str = "https://www.baidu.com:8888/demo/a/d/c.html?s=77&v=54#m1";
// var urlObj = url.parse(str,true);
// console.log(urlObj);

// var obj1 = {
// 	protocol:"http",
// 	hostname:"www.qq.com",
// 	pathname:"a/s/d/f",
// 	search:"m=5&n=78&i=99",
// 	hash:"#mn",
// 	port:8088
// }
// var str1 = url.format(obj1);
// console.log(str1);

// var str2 = "https://www.sina.com/a/s/d/f";
// var str3 = "../c/l/m";
// var str4 = url.resolve(str2,str3);
// console.log(str4);

// console.log(__filename);
// console.log(__dirname);

var path = require("path");
var myPath = path.normalize(__dirname + "/test/a//b/../c/a.mp3'");
console.log(myPath);

var path1 = "path1",
	path2 = "path2//pp\\",
	path3 = "../path3";

var myPath1 = path.join(path1,path2,path3);
console.log(myPath1);

var myPath2 = path.resolve("path1","path2","a/b\\c/");
console.log(myPath2);

var p1 = "d:/Tencent/QQ/AuI18N/2052/";
var p2 = "d:/Tencent/QQ/Bin~272/TXSSO/";

var myPath3 = path.relative(p1,p2);
console.log(myPath3);

var myPath4 = path.dirname(__dirname + '/test/util you.mp3');
console.log(myPath4);

var myPath5 = __dirname + "/test/util you.mp3";

console.log(path.basename(myPath5,"1txt"));
console.log(path.extname(myPath5));