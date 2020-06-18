const fs = require("fs");
const path = require("path");

// create folder
fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err;
  console.log("folder created");
});

//create and write to file OVERWRITES
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "hello world!",
  err => {
    if (err) throw err;
    console.log("file created");
  }
);

//create and write to file
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "hello world!",
  err => {
    if (err) throw err;
    console.log("file created");
  }
);

// Read File
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  err => {
    if (err) throw err;
    console.log("file renamed");
  }
);
