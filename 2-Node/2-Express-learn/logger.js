

module.exports = function () {
    return function (req, resp, next) {
        const start = +new Date();
        const stream = process.stdout;
        const url = req.url;
        const method = req.method;
        resp.on('finish', () => {
            const end = +new Date();
            const duration = end - start;
            const logMessage = `
            ${method} /${url} : took ${duration}ms
            `;
            stream.write(logMessage)
        });
        next();
    }
}