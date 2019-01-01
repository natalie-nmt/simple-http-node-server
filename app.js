const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  fs.writeFile('hello-world.txt', 'Hello to this great world.', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Heyo! Server running at http://${hostname}:${port}/`);
});