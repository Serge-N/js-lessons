function foo() {
    return [1, 2, 3];
}

var [a, b, c] = foo();

console.log(a, b, c);

// there is object and array destructuring.

//Object Property Assignment pattern

var { a: first, b: second, c: third } = foo();

console.log(first, second, third); // this is undefined

var X = 10, Y = 20;

var o = { a: X, b: Y };

// pattern here is target : source or property-alis: value or target = source
console.log(o.a, o.b);

// with object destruction this becomes:
// value : variable-alis or target : source

var { a: AA, b: BB } = o;
console.log(AA, BB); // See? - it is flipped! Why? - bacause it is an assignment operator

// The pupose of od destructing is less typing and readability

var c = [2, 3, 4];
var d = [1, ...c, 5];

console.log(d);

// the gather behaviour
var [e, ...f] = d;
console.log(e,f);