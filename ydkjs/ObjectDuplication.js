// determine if shallow or deep copy

// shallow copy - copy of same object with non reference properties of the original object

// deep copy - replictes both the object and references : beware of the circular duplication problem

// Object.assign does a shallow copy

function anotherFunction() {
  /***/
  console.log("This function.");
}

var anotherObject = {
  c: true,
};

var anotherArray = [];

var myObject = {
    a : 2,
    b: anotherObject,
    c: anotherArray,
    d: anotherFunction
};


console.log(anotherArray.push (anotherObject, myObject));

var newObj = Object.assign( {}, myObject );

console.log(newObj.a); 
console.log(newObj.b === anotherObject); 
console.log(newObj.c === anotherArray); 
console.log(newObj.d === anotherFunction); 