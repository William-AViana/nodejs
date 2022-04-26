const url = require('url');
const adr = 'https://localhost:3000/defalt.html?year=2022&month=april';
const q = url.parse(adr, true);

console.log(q.href, '\n')
console.log(q.host, '\n')
console.log(q.pathname, '\n')
console.log(q.search, '\n')

var qdata = q.query
console.log(qdata)
console.log(qdata.month)