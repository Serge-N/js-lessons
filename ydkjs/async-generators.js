// this aims to run async code in a sequential pattern
// concept :
var x = 1;

function foo() {
  x++;
  baz(); // <- behave as if this was present
  console.log("x: " + x);
}

function baz() {
  x++;
}

foo();

// this could be done using ES 6 as follows.
// renamed the function for clarity purposes foo => boo

x = 1;

function *boo(){
  x ++;
  yield;
  console.log("X: "+ x);
}

var it = boo();

// start here
it.next();
baz();
it.next();