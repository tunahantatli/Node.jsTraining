//var generateName = require('sillyname');

import generateStupidName from 'sillyname';
var sillynames = generateStupidName();

console.log(`my name is ${sillynames}`);

import fs from 'node:fs/promises';
fs.writeFile('message.txt', `my name is ${sillynames}`, (err)=>{
    if(err) throw err;
    console.log("This file has been saved");
})