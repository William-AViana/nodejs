const fs = require('fs');

fs.rename('myFile3.txt', 'myFile.txt', function (err) {
  if (err) throw err
  console.log('File Renamed!');
});
