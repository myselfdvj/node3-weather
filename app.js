const notes = require('./notes.js')
const vemail = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
yargs.command({
   command: 'add',
   describe:'add notes..',
   builder:{
    title:{
        describe:"shopping",
        demandOption : true,
        type: 'string'
    },
    body :{
        describe:"to buy",
        demandOption : true,
        type: 'string'
    }
},
   handler: function(argv){
      notes.addnotes(argv.title,argv.body)
   }
})
yargs.command({
    command: 'remove',
    describe: 'remove notes',
    title:{
        describe:"remove note",
        type:'string'
    },
    body:{
        describe : "remove shopping",
        type: 'string' 
    },
    handler: function(argv){
        notes.removenotes(argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    handler: function(){
        console.log("read your notes ....")
    }
})
yargs.command({
    command: 'list',
    describe: 'list notes',
    builder:{
        title:{
            type:'string'
        },
        body:{
            type:'string'
        }
    },
    handler: function(argv){
       notes.listnotes(argv.title,argv.body)
    }
})
yargs.parse()
//console.log(process.argv)
//console.log(vemail.isEmail('drah34.gmail.com'))
//console.log(chalk.bgGrey.inverse.red('success'))
// const command = process.argv[2]
// if(command === 'add')
// {
//     console.log("adding notes..")
// }
// else if (command === 'remove')
// {
//     console.log('notes remove..')
// }

