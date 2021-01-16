const greet = require("./greet");
debugger;
const greeting = greet(process.argv[2] || "stranger");

console.log(greeting);
