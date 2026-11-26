const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Fahhhh!");
    res.end();
});

server.listen(3000);