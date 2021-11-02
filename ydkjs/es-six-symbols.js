var sym = Symbol("some optional description");

console.log(typeof sym);

// What?
// it is a primitive type just like string or number
// does not use the new Constructor
// the paramater should describe the symbol
// symbols are instances of Symbol, convert to object for comparison

// Why ?
// To create a string value that can't collide any other value.
// e.g event name passing, that is keeping special props aside.

console.log(sym.description);
console.log(sym.toString());