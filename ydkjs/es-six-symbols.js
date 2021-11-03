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

// symbol registry
// the setback is usually these are stored in the outter scope.

// as such it is possible to create a symbol registry.

const EVT_LOGIN = Symbol.for( "event.login" );

console.log(EVT_LOGIN);
// symbol.for(..) - can retrieve any symbhol from the registry
// symbols where made to replace the use of magic strings

// symbol as object props

//ES 6 has free symbols as well.

var a = [1,2,3];

console.log(a[Symbol.iterator]); 

// the above are not global values but rather properties of Symbol function object