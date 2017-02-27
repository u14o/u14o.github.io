'use strict';
const http=require('http');
const fs=require('fs');
const path=require('path');

http.createServer(function(req,res){
	let url=req.url;
	if(!url.includes('.')){
			url='index.html';
		}
	let absPath=path.join(__dirname,url);
	fs.readFile(absPath,function(err,data){
		
		if(err){
			return res.end(err.message);
		}
		res.end(data);
	})
}).listen(2300,function(){
	console.log('服务器正在运行中，并监听2300端口');
})
