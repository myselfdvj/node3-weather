const whether = require('./callback')
const forecast = require('./forecast')
const request = require('request')
const yargs = require('yargs')
const url = 'http://api.weatherstack.com/current?access_key=88515c8b8b1b4c7037cf6072a962a0ec&query=&units=f'
// //units=f will make tempreture see in fahrenheit
request({url:url,json:true},(err,res)=>{
    if(err)
    {
        console.log("there is no internet connection...")
    }
    else if(res.body.error)
    {
        console.log("ubnable to find location...")
    }
    else{
        console.log(res.body.location.name + " It is currently " + res.body.current.temperature + " degree , but feels like " + res.body.current.feelslike)
    }
   // const parse = JSON.parse(res.body)
    
})
// const address = process.argv[2]
// if(!address){
//     console.log("please provide address.........")
// }
// else{
//     whether(address,(err,data)=>{
//         if(err) {
//             return console.log(err)
//         }
    
//         console.log("results .",data)
    
//     forecast(data.place,data.country,(err,fdata)=>{
//         if(err) {
//             return console.log(err)
//         }
       
//         console.log("results .",fdata)
//     })
//     })
// }
