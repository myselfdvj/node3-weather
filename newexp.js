const path = require('path')
var express = require('express')
const hbs = require('hbs')
const { title } = require('process')
const callback = require('./callback')
const forecast = require('./forecast')
var app =express()

app.set('views', path.join(__dirname,'whehtml/views'))

app.set('view engine','hbs')

const partialpath = path.join(__dirname,'/whehtml/partial')

app.use(express.static(path.join(__dirname,'whehtml/views')))

hbs.registerPartials(partialpath)

app.get('',(req,res)=>{
    res.render('index',{
        title:"Whether",
        name:"Drashti Vaishnav"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me..',
        name :'Drashti Vaishnav'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helptext:"this is help page..for user.",
        title:"Help page "
    })
})

app.get('/weather',(req,res)=>{
    const address = req.query.search
    if(!address)
    {
        return res.send({
            error:"please enter location"
        })
    }
    callback(address,(err,data)=>{
       if(err)
       {
          return res.send({err})
       }
       forecast(address.location,(err,fdata)=>{
        if(err) {
            return  res.send({err})
        }
       res.send({fdata})

    })
    })
})
    // res.send({

    //     // location:'bharuch',
    //     // forecast:30
    //     search:req.query.search
        
    // })


app.get('/product',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
            error:"please search item"
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})
app.listen(8081,(err,connected)=>{
if(err)
{
    console.log("not connect to server")
}
else
{
    console.log("connected to server.....")
}
})