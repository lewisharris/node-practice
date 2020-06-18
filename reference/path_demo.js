const path = require('path');

// basename. this finds the base file name rather than the entire directory
console.log(path.basename(__filename));

//dirname Directory name
console.log(path.dirname(__dirname));


//File extentions
console.log(path.extname(__filename))

//Creat path object
console.log(path.parse(__filename))

//concatenate paths
console.log(path.join(__dirname,'test','hello.html'))