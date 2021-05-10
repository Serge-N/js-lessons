// writeable prevents ediiting the value
var myObject = {};

Object.defineProperty( myObject, "a",{
    value : 2,
    writable: false,
    configurable: true,
    enumerable: true
});

myObject.a = 3;

console.log(myObject.a);

// configurable prevents the ability to use delete operator

var myNewObject ={
    a : 8
};

console.log(myNewObject.a);

delete myNewObject.a; 

console.log(myNewObject.a);

Object.defineProperty( myNewObject, "a", {
    value  : 5,
    writable: true,
    configurable: false,
    enumerable: true
});

console.log(myNewObject.a);

delete myNewObject.a;

console.log(myNewObject.a);

// as seen the delete call failed silently

// enumerable prevents an object from 