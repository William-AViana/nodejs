const fs = require('fs');

fs.writeFile('myFile3.txt', 'Replacing content.', function (err) {
  if (err) throw err
  console.log('Replaced!');
});
