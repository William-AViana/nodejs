const fs = require('fs');

fs.appendFile('myFirstFile.txt', '\nObs: appendFileUpdate',
  function (err) {
    if (err) throw err
    console.log('Updated!')
  })