var generateName = require('sillyname');
var sillyname = generateName();

console.log(`my name is ${sillyname}`);

const fs = require('fs');
fs.writeFile('message.txt', `my name is ${sillyname}`, (err)=>{
    if(err) throw err;
    console.log("This file has been saved");
})