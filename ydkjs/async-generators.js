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

function* boo() {
  x++;
  yield;
  console.log("X: " + x);
}

var it = boo();

// start here
it.next();
baz();
it.next();

function* coo(x, y) {
  return x * y;
}

var it = coo(6, 5);

var res = it.next();

console.log(`Answer : ${res.value}`)

/// generators can interleave while functions cannot

var a = 1;
var b = 2;

function* joo() {
  a++;
  yield;
  b = b * a;
  a = (yield b) + 3;
}

function* jar() {
  b--;
  yield;
  a = (yield 8) + b;
  b = a * (yield 2);
}

// goal is to control iterator behavour
function step(gen) {
  var it = gen();
  var last;

  return function () {
    last = it.next(last).value;
  }
}

// case ome joo fineshes be jar

a = 1;
b = 2;

var s1 = step(joo);
var s2 = step(jar);

// run *joo first
s1();
s1();
s1();

// then run jar
s2();
s2();
s2();
s2();

// understand why the result is this way.
console.log(a,b);
