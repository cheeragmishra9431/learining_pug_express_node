// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// <-------------------------------------till now simple node js stuff---------------------------------------->
// // Synchronous or blocking
// // - line by line execution

// // Asynchronous or non-blocking
// // - line by line execution not guaranteed
// // - callbacks will fire

// const fs = require("fs");
// fs.readFile("dele.txt", "utf-8", (err, data)=>{          // this syntax is really important.
//     console.log(data);
// });
// console.log("This is a message");

//use npm init to use node package manager.
// in the terminal write npm init and then fill it up whatever it is asking for.



// <-------------------------------------till now node js tuts---------------------------------------->
const express = require("express");
const fs= require("fs"); // this will be used in pug to join with the views directory.
const app = express();
const port = 80;
// The GET and POST are two different types of HTTP requests. GET is used for viewing something, without changing it, while POST is used for changing something. For example, a search page should use GET to get data while a form that changes your password should use POST. Essentially GET is used to retrieve remote data, and POST is used to insert/update remote data.
 
app.use('/static', express.static('static'))// THIS IS USED FOR VIEWING STATIC FILES. THE JS WONT BE RENDERED BUT THE USER CAN VIEW IT.
// MAKE A STATIC FOLDER AND THEN MAKE INDEX.JS FILE 
// IN THE SEARCH BAR TYPE  http://localhost/static/index.js to see the static files.


app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Harry");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Harry");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Harry");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
// <-------------------------------------till now express specific stuff---------------------------------------->


// A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. ... Some popular template engines that work with Express are Pug, Mustache, and EJS.

// use `npm i pug --save` in the terminal
const path=require("path"); // use this to use `path.join`

// pug specific stuff
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//endpoints
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});
app.get("/actual", (req, res)=>{ 
    res.status(200).render('actual')                           //only to render file.
});
app.get("/actual1", (req, res)=>{ 
    let params={ 'title':'hello', 'varx':'sdaf'}                //render files plus sending variables.
    res.status(200).render('actual',params) 
});