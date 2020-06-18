const os = require("os");

// Platform

console.log(os.platform());
//darwin mac
//win 32 windows

//CPU Arch
console.log(os.arch());

//CPU Core info
console.log(os.cpus());

//Free Memory
console.log(os.freemem());

//Total Memory
console.log(os.totalmem());

//Home Directory
console.log(os.homedir());

//uptime
console.log(os.uptime());
