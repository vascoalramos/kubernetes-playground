const http = require("http");

const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
    console.log(`Received request for URL: ${req.url}`);
    res.writeHead(200);
    res.end("Hello World! I am Version 2!");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Your app is listening on port ${port}`);
});
