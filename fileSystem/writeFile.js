const fs = require('fs');

fs.writeFile('myNewFile.txt', 'New Content!', function (err) {
  if (err) throw err
  console.log('Changed!');
});
