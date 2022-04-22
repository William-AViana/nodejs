const fs = require('fs');

fs.open('myNewFile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
