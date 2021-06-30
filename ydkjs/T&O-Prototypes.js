// a prototyped object is an object linked to another object

var anotherObject = {
    a : 2
};

var myObject = Object.create( anotherObject );

console.log( myObject.a );

// if the prototype chain ends or not found - undefined is returned

// shadowing is when a property ends on the called object and a higer linked objected.

// avoid shadowing if possible - the consequences are greater

console.log( anotherObject.hasOwnProperty( "a" ) ); 
console.log( myObject.hasOwnProperty( "a" ) ); 

myObject.a++; // oops, implicit shadowing!

console.log( anotherObject.a ); 
console.log( myObject.a ); 

console.log( myObject.hasOwnProperty( "a" ) );