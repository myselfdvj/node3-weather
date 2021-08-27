var express = require("express");
var app = express();
app.use(express.static('img'));

 app.get('/',function(req,res) {
     res.send('this express get method');
     
 })

app.listen(8081,function(err,data){
	if(err){
		console.log(err)
	}
	else
	{
		console.log("connect ..")
	}
})