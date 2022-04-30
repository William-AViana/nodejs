const fs = require('fs');
const rs = fs.createReadStream('./index.html');

rs.on('open', function () {
  console.log('The file is open')
});
