
const express = require('express');
const app = express();
// const logger = require('./logger');
const logger = require('morgan');
const bodyParser = require('body-parser')

//----------------------------------------------------------------------
// app.get("/", (req, res) => {
//     res.send('Hello World!');
// });
//----------------------------------------------------------------------
// app.get('/todos', (req, res) => {
//     //let todos = ["learn js", "learn node", "learn express"];
//     // res.send(todos);  // application/json
//     // or
//     //res.json(todos);

//     let todos = `
//         <ul>
//             <li>learn JS</li>
//             <li>learn Node</li>
//             <li>learn Express</li>
//         </ul>
//     `;
//     res.send(todos); // text/html

// });


//----------------------------------------------------------------------

// app.get("/old-resource", function (req, res) {
//     res.redirect(301, "new-resource");
// });
// app.get("/new-resource", function (req, res) {
//     res.send('we r happy to serve new reource');
// })

//----------------------------------------------------------------------


// app.get('/', function (req, res) {
//     res.sendFile(__dirname + "/public/index.html");
// })
// app.get('/css/bootstrap.css', function (req, res) {
//     res.sendFile(__dirname + "/public/css/bootstrap.css");
// })
// app.get('/images/exp.png', function (req, res) {
//     res.sendFile(__dirname + "/public/images/exp.png");
// })

// or

let todos = ["learn js", "learn node", "learn express"];

app.use(logger('dev'));
app.use(express.static(__dirname + "/public")); // index.html | bootstrap.css | exp.png | client-app.js
app.get("/my-todos", function (req, res) {
    res.json(todos);
});
// app.use(bodyParser.json());
app.post("/my-todos", bodyParser.json(), function (req, res) {
    todos.push(req.body.title);
    res.send({ status: 'New todo saved..' });
});
app.listen(3000, () => {
    console.log('listening on port 3000');
})