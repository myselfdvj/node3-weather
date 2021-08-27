// const add = (a,b,callback)=>{
//     setTimeout(()=>{
//         callback(a+b)
//     },2000)
// }
// add(10,20,(data)=>{
//     console.log(data)
// })
const request = require('request')
const whether = (address,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=88515c8b8b1b4c7037cf6072a962a0ec&query= '+encodeURIComponent(address) +' &units=f';
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback("there is no internet connection...",undefined)
        }
        else if(res.body.error){
            callback("ubnable to find location...",undefined)
        }
        else{
            callback({
                place : res.body.location.name,
                temperature: res.body.current.temperature,
             
            })
           
        }
    })
}

console.log("demo")
module.exports = whether