//creating a server
const http = require('http')
//can store in var or dont need to
const server = http.createServer((req, res) => {
    console.log('request made')

})
//server wont do anything until you use .listen method
server.listen(3000, 'localhost' /* localhost is default, but can speciy in 2nd arg*/, () => {
    console.log('listening for requests on this port number')
})


/* NOTE
    these console logs, will not be seen in the browser because these console logs are ran in the server.. so they will be in the cli

*/


// <-------------------------------------------------------- BREAK -------------------------------------------------------->
//                                                   Requests and Responses
// EX 1: basics on requests and sending responses to browser
const fs = require('fs')

const server1 = http.createServer((req, res) => {
    console.log(req.url, req.method) // will return /whatever url the browser has.. ex: /about , GET

    //set header content type: 3 steps
    res.setHeader('Content-type', 'text/plain') // 1) setting header type being sent back to browser
    res.write('hello world') // 2) whatever content we want to send to browser
    res.end() // 3) ending the response so it knows to send back to browser
    
    //another ex: sending html 
    res.setHeader('Content-type', 'text/html') // 1) setting header type being sent back to browser
    res.write('<p>hello<p>') // 2) whatever content we want to send to browser
    res.write('<p>hello world<p>') // 2) whatever content we want to send to browser
    res.end() // 3) ending the response so it knows to send back to browser
    

    //another ex: sending an html file to browser from server
    fs.readFile('file path', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }
        // res.write(data)
        res.end(data) // can just send data using this instead if only need to use once

    })


})
//server wont do anything until you use .listen method
server1.listen(3001, 'localhost' /* localhost is default, but can speciy in 2nd arg*/, () => {
    console.log('listening for requests on this port number')
})



//EX: 2  basic routing system to different url in the browser. 
const server2 = http.createServer((req, res) => {
    console.log(req.url, req.method) // will return /whatever url the browser has.. ex: /about , GET

    let path = '/file path/'
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }

    //another ex: sending an html file to browser from server
    fs.readFile('file path', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }
        // res.write(data)
        res.end(data) // can just send data using this instead if only need to use once

    })


})
//server wont do anything until you use .listen method
server2.listen(3002, 'localhost' /* localhost is default, but can speciy in 2nd arg*/, () => {
    console.log('listening for requests on this port number')
})
