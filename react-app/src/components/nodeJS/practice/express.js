//always have to import
const express = require('express')

//need to call for express app
const app = express()

//listen for requests
app.listen(3000)

app.get('/', (req, res) => {

    //essentially the same as res.setHeader() which works out what content type we send out and also statuscode
    res.send();

})


//redirects
app.get('/', (req, res) => {
    //redirect method with url as param
    res.redirect('/about')

})

//404page
//use will run if there are no other matches, so needs to be at the bottom
app.use((req, res) => {

    res.status(404).sendFile('/file path', { root: __dirname })
})
