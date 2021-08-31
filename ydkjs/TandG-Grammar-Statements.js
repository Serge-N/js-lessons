// expression
var a = 3 * 6;
var b = a;
b;

console.log(`The value ${b}`);

// capturing  completion values
var a, b;

a = eval("if (true) { b = 4 + 38;}");

console.log("The value " + a);

function Vowels(str) {
  var matches;
  const regex = /[aeious]/g;

  if (str && (matches = str.match(regex))){
      return matches;
    }
}

console.log( Vowels( "Hello World!") );

// avoid labeled statements