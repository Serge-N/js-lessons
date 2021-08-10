// in-built functions

var a = new String("abc");

console.log(typeof a);

console.log(a instanceof String);

console.log(Object.prototype.toString.call(a));

// constructors create a primitive object.

// primitive types are automatically boxed

// avoid use new to e.g new string, leave the optisamastion to the js engine
var date = new Date();

console.log(date.toDateString());

function createError(x) {
  if (!x) {
    throw new Error("x wasn't provided");
  } else {
    console.log(`x is ${x}`)
  }
}

createError(3);

// symbols
// designed basically for ES6 constructors
// symbols are not objects they are simply scalar primitives


// native prototypes

// e.g string, this allows one to get methods from String.prototype
var a = "auto boxed string";

console.log(a.indexOf('x'));

console.log(a.charAt(5));

// all these methods create a new value without modifying the present one.

//Common Protype types are:

// Arrays
// strings
// Numbers
// Functions
// RegExp