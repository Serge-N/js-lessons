// expression
var a = 3 * 6;
var b = a;
b;

console.log(`The value ${b}`);

// capturing  completion values
var a, b;

a = eval ("if (true) { b = 4 + 38;}");

console.log("The value " + a);