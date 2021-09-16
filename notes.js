//console.log("utils.js")
// exports.add = function(a,b){
//     return a+b
// }
const fs = require('fs')
const chalk = require('chalk')
const name = "drashti"
const getnote = function(){
    console.log("your notes")
}
const addnotes =function(title, body){
    const notes = loadnotes()
    notes.push({ 
        title: title,
        body: body
    })
 savenotes(notes)
}
const savenotes = function(notes){
    const djson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',djson)
} 
const loadnotes = function(){
    try {
        const file = fs.readFileSync('notes.json')
        const databuff =file.toString()
        return JSON.parse(databuff) 
        
    } catch (error) {
        return []
    }
}

const listnotes = function(title,body){
    const file = fs.readFileSync('notes.json')
    const buffer = file.toString()
    console.log(JSON.parse(buffer))
    // const Title =  JSON.parse(buffer.title)
    // const Body =  JSON.parse(buffer.body) 
 //   console.log("title : ",Title," body : ",Body)
    

}

const removenotes = function(body){
    const notes = loadnotes()
    const tokeep = notes.filter(function(notes){
    return notes.body !==body
    })
    if(notes.length > tokeep.length){
        console.log(chalk.green('removed'))
    }
     else{
        console.log(chalk.red('nnotes not remove'))
     }
    savenotes(tokeep)
     

}
module.exports={
    getnote:getnote,
    addnotes:addnotes,
    removenotes:removenotes,
    listnotes:listnotes
}