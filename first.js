const http = require('http');
const date = require('./myFirstModule/myDateTime')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('Date: ' + date())
  res.end()
}).listen(3000)