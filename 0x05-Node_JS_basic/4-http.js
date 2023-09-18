const http = require('http');

const PORT = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

app.listen(PORT, () => {
  console.log(`Http Server running on port ${PORT}`);
});

module.exports = app;
