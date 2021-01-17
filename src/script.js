const greet = require("./greet");
const greeting = greet(process.argv[2] || "stranger");

console.log(greeting);
