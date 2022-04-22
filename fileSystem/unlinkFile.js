const fs = require('fs');

fs.unlink('myFirstFile.txt', function (err) {
  if (err) throw err
  console.log('File deleted!');
});
