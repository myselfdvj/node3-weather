var file = require("fs");
file.writeFileSync("input.txt","hello evr",function(err,data){
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("syn write file exmple")
    }
})
file.writeFileSync("input.txt","asyn data",function(err,data){
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("asyn write file exmple")
    }
})

file.readFile("input.txt",function(err,data){
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("read asyn  file exmple")
    }
})