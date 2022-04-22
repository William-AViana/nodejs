const fs = require('fs');

const nameFile = 'myFirstFile'

const contentFile = `Hello, this is a test for create file for NodeJS. 
I don't have perfect English, I'm trying to write what i know. 
Obs: metod appendFile`

fs.appendFile(`${nameFile}.txt`,
  contentFile,
  function (err) {
    if (err) throw err
    console.log('Saved!')
  });