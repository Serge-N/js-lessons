// callbacks can be nested
// using third party control can be termed as IoC

//unsafe
function addNumbers(x, y) {
  return x + y;
}

function addNumbersBetter(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    throw new Error("Bad parameters");
  }
  return x + y;
}

function addNumbersBest(x, y) {
  x = Number(x);
  y = Number(y);

  return x + y;
}

console.log(addNumbers(4, 5));
console.log(addNumbers(2, "5"));
console.log(addNumbersBest(2, 5));
console.log(addNumbersBest(2, "5"));
console.log(addNumbersBetter(2, 5));
//console.log(addNumbersBetter(2, "5"));

// trust but verify

// Node Js uses the "error first style"

// always invoke callbacks aynchrously