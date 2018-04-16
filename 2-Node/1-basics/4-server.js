

const http = require('http');
const fs = require('fs');
const httpServer = http.createServer(); // EE

httpServer.on('request', function (req, res) {

    //--------------------------------------------------------
    // console.log('new request..');
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.write("HelloWorld from server , running on Node.js");
    // res.end();
    //--------------------------------------------------------

    // // Non blocking IO
    // fs.readFile('./PPT/all-levels node.pdf', (err, data) => {
    //     console.log('new Request..');
    //     res.writeHead(200, { "Content-Type": "application/pdf" });
    //     res.write(data);
    //     res.end();
    // });

    //--------------------------------------------------------

    // Non blocking IO using streams

    res.writeHead(200, { "Content-Type": "application/pdf" });
    const readableStream = fs.createReadStream('./PPT/all-levels node.pdf');// EE

    // readableStream.on('data', function (chunk) {
    //     console.log(chunk.length);
    //     console.log('stream data-event');
    //     res.write(chunk);
    // });
    // readableStream.on('end', () => {
    //     console.log('stream end-event');
    //     res.end();
    // })

    // or

    readableStream.pipe(res);

    //--------------------------------------------------------


});

httpServer.listen(3000, () => {
    console.log('server listening at http://localhost:3000');
});

