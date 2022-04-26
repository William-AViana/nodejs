const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Contente-Type': 'text/html' });
  res.write(req.url + '\n\n');
  const q = url.parse(req.url, true).query
  let txt = q.year + " " + q.month;

  res.end(txt);
}).listen(3000);
