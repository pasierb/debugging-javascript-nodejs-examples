const http = require('http');

http.createServer((req, res) => {
    debugger;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello!");
    res.end();
  })
  .listen(8080);
