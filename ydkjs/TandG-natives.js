// in-built functions

var a = new String("abc");

console.log( typeof a );

console.log ( a instanceof String );

console.log( Object.prototype.toString.call( a ) );

// constructors create a primitive object.

// primitive types are automatically boxed

// avoid use new to e.g new string, leave the optisamastion to the js engine
