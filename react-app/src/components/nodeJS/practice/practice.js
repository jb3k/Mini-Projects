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



// Streams:
//create stream
const readStream = fs.createReadStream('/some kind of file' // can add an addtional arg ex: {encode: 'utf8'} and it will convert file to string
)

readStream.on('data', (chunk) => {
    console.log('-----New Chunk -----')
    console.log(chunk) // raw data
    console.log(chunk.toString()) // now if its a text file (.txt) or something you can see the text

})

//this is going to return chunks of data in a stream as the file buffers. Similar to watching a show.

//write stream
const writeStream = fs.createWriteStream('/some kind of file')
// when you run the file it will write this stuff in that file you are writing too above
readStream.on('data', (chunk) => {
    console.log('-----New Chunk -----')
    console.log(chunk)
    writeStream.write('anything you want to write')
    writeStream.write(chunk)

})

//piping
readStream.pipe(writeStream) // as it reads it will write
