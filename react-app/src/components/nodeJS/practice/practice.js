const fs = require('fs')

//reading files (if there was a file / directory)
//this command is async
fs.readFile('file path', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})
// if you run this practice.js file, it will now read the file you tell it to and display in cli.


//writing files... takes 3 arguments:
//(file you want to write in(if doesnt exist then creates new file), text we want to write in file, then callback function)
//this command is async
fs.writeFile('file path', 'text', () => {
    console.log('file was written')
})

// creating directories
if (!fs.existsSync('./stuff')) { // if the file already exists
    fs.mkdir('./stuff', (err) => {
        if (err) console.log(err)
        console.log('folder created')
    })
}
//deleting files
else{
    fs.rmdir('./stuff', (err) => {
        if (err) console.log(err)
        console.log('folder deleted')
    })
}
//another way to delete
if (!fs.existsSync('./stuff')) { // if the file already exists
    fs.unlink('./stuff', (err) => {
        if (err) console.log(err)
        console.log('folder created')
    })
}
