const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStreaam = fs.createWriteStream('./docs/blog4.txt');

//readStream.on('data', (chunk) =>{
  //  console.log('---new chhunk---');
    //console.log(chunk);
    //writeStreaam.write('\nNEW CHUNK:\n');
    //writeStreaam.write(chunk);


//})
//piping
readStream.pipe(writeStreaam)