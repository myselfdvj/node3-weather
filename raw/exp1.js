
var express = require('express')
var path = require('path');
var bp = require('body-parser')
var session = require('express-session')
var mongoose = require('mongoose');
var app = express();
app.use(bp.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname,'html')));

app.use(session({secret:'xxxyyy',resave:true}));
var sess;
mongoose.connect('mongodb://localhost:27017/mydb'); 
var db=mongoose.connection; 

  
mongoose.connect('mongodb://localhost:27017/mydb',function(err,db) {
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log("dtabase connected");

	}
	// 
    })
    var db = mongoose.connection;
app.get('/regist',function(req,res){
    res.sendFile(path.join(__dirname,'html','regist.html'))
})
app.post('/regist',function(req,res){
var name = req.body.fname;
var password =req.body.pwd;
var age = req.body.age;
var mobile = req.body.mob;
var dob = req.body.date;
var data = {
    "name":name,
    "password":password,
    "age":age,
    "mobile":mobile,
    "dob": dob
}
db.collection('login').insertOne(data,function(err,data){
    if(err) throw err;
    //console.log("Record inserted Successfully"); 
    res.write("record inserted..")
})
})
// app.get('/home',function (req,res) {
//     res.sendFile(path.join(__dirname,'html','/home.html'));
//     //res.redirect('/home.html')
// })

app.post('/login',function(req,res){
    //sess = req.session;
    var fname  = req.body.fname;
    var pswd = req.body.pswd;
    if(req.body.fname = "admin"&&req.body.pswd =="admin")
    {
        // req.session.loggedin = true;
        req.session.fname = fname;
        req.session.pwd = pswd;
        //  sess.fname = req.body.firstname;
            //  sess.pswd = req.body.pswd;
        res.redirect('/wel.html');
    }  
    else{
        res.redirect('/login.html')
    }  
})

app.get('/wel',function(req,res){
   // res.write("hello");
   // sess = req.session;
    if(req.session.pwd)
    {
       // res.send("welcome : " + req.session.fname);
       res.redirect('/wel.html')
       
    
    }
    else{
        res.redirect('/login.html')
    }
    
})  

app.get('/logout',function(req,res){
    req.session.destroy();
	res.redirect('/regist.html')
})
app.listen(8081,function (err,succ) {
if(err)
{
    Console.log(err)

}
else{
    console.log("connect")
}    
})