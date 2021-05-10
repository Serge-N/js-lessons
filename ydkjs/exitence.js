// check that the object exits
var myObject = {
    a : 2
};

// method 1
console.log( ("a" in myObject) );
console.log( ("b" in myObject) );

// method 2
console.log( myObject.hasOwnProperty( "a" ) );
console.log( myObject.hasOwnProperty( "b" ) );
