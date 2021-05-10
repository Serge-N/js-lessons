// avoid adding properties that look like numbers

var myArray = ["foo",42,"bar"];

// this changes the array length if the aim was to change item at pos 3
myArray["3"] = "baz";

console.log(myArray.length);

console.log(myArray[3]);

console.log(myArray["3"]);
