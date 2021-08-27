const request = require('request')
const forecast = (latitude,longitude,callback)=>{
//     const url = 'http://api.weatherstack.com/current?access_key=88515c8b8b1b4c7037cf6072a962a0ec&query='+ encodeURIComponent(latitude)
// +','+ encodeURIComponent(longitude)+' &units=f';
const url = 'http://api.weatherstack.com/current?access_key=88515c8b8b1b4c7037cf6072a962a0ec&query= '+encodeURIComponent(address) +' &units=f';
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback("there is no internet connection...",undefined)
        }
        else if(res.body.error){
            callback("ubnable to find location...",undefined)
        }
        else{
            callback(undefined,res.body.location.name + " It is currently " + res.body.current.temperature + " degree , but feels like " + res.body.current.feelslike
            )
        }
    })
}
module.exports = forecast