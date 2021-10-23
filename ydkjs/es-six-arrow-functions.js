// arrow functions
function foo(x, y) {
    return x + y;
}

var foo = (x, y) => x + y;

// arrow fuctions are :
// -> anynomous always
// -> all normal capabilites are included.

var a = [1, 2, 3, 4, 5];

a = a.map(v => v * 2);

console.log(a);

// use arrow functions only in shorter 