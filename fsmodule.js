const fs = require('fs');

//fs.readFile('msg.txt', 'utf8', (err, data)=>{
  //  console.log(err, data)
//})

const a = fs.readFileSync('msg.txt')
console.log(a.toString())

console.log("finished reading the file")