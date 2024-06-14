const fs = require("fs");

const input = fs.readFileSync("input", "utf-8").split("\r\n");

console.log(input);

let sum = 0;

const regex = /\D/g;

for (var i = 0; i < input.length; i++) {
  console.log(typeof input[i]);
  const digits = input[i].replace(regex, "");
  if (digits) console.log(digits[0] + digits[digits.length - 1]);
  sum += parseInt(digits[0] + digits[digits.length - 1]);
}

console.log(sum);
