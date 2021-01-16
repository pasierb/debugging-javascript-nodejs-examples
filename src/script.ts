const { argv } = require("process");

function greet(name: string): string {
  return `Hello ${name}!`;
}

const greeting = greet(argv[2] || "stranger");

console.log(greeting);

