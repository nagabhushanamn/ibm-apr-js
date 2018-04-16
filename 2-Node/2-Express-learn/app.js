
const express = require('express');
const app = express();

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

app.use(express.static(__dirname + "/public"));
app.get("/todos", function (req, res) {
    let todos = ["learn js", "learn node", "learn express"];
    res.json(todos);
});
app.listen(3000, () => {
    console.log('listening on port 3000');
})