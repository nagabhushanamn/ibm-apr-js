

const http = require('http');


/*

    web-application requirement(s)

    --> routing

            - by URL
            - by HTTP method
            - by headers
            - by params
            

*/

http.createServer(function (req, res) {
    let url = req.url;
    let method = req.method;
    if (url === "/products" && method === "GET") {
        res.write('all products response');
    } else {
        res.write('unknown url');
    }
    res.end();
}).listen(3000);