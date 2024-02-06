// step 1 
// we created message.txt file and added data 'Have a good days!' 
// and printed it to the console 'the file has been saved!' if is it successfully.
const fs = require('fs');
fs.writeFile("message.txt", "Have a good days!", (err)=>{
    if(err) throw err;
    console.log("The file has been saved!");
});

// step 2
// we created message.txt file in the up.
// we'll read this file datas with function in the below.
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

// Step 3:
// run in terminal:
// node index.js
// you must see:
// The file has been saved!
// Have a good days!