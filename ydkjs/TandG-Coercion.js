// converting one type to anoher 
// explictly  is -  type casting
// implictly is coercision.

var a = 42;

var b = a + ""; // implict

var c = String(a); // explict

// common corsion methods are toString, toNumber, toBoolean, ToPrimitive

var d = [1, 2, 3];

console.log(d.toString());

// Json.stringify - does not work on functions, symbols, 

var e = {
  b: 42,
  c: "42",
  d: [1, 2, 3]
};

console.log(JSON.stringify(e));

// To Number - becomes 

// In JS numbers are numbers and boleans are booleans

// falsy values include
// undefined
// null
// false
// 0
// NaN
// ""

// truth values

var n = "false";

var m = "0";

var j = "''";

var l = Boolean(n && m && j);

console.log(l);

// Eplicit Coersion

var z = 42;

var x = "3.142";

var s = Number(x); // +x

var y = String(z);  // could have used toString()

console.log(typeof (s));

console.log(typeof (y));

// use +string for numbers

var c = "3.142";

var d = 5+ +c;

console.log(d);

// ~ and | bitwise operator
// | bitwise OR

// The ~ operator first “coerces” to 
// a 32-bit number value, and then performs a bitwise negation (flip‐ping each bit’s parity).
// mathematically speaking it does two's compliment
console.log( 0 | NaN );

console.log( ~42 ); // ~x means -(x+1);

var a = "Hello World";

if (a.indexOf( "lo" ) >= 0) { // true
  console.log( "found it!");
}

if (a.indexOf( "lo" ) != -1) { // true
  console.log( "found it");
}

if (a.indexOf( "ol" ) < 0) { // true
  console.log( "not found!");
}

if (a.indexOf( "ol" ) == -1) { // true
  console.log("not found!");
}

// This code above can be written as follows:

console.log(~a.indexOf( "lo" )); // <-- truthy!

if (~a.indexOf( "lo" )) { // true
  console.log( "found it!");
}

console.log(~a.indexOf( "ol" )); // <-- falsy!

!~a.indexOf( "ol" ); // true

if (!~a.indexOf( "ol" )) { // true
  console.log( "found it!");
}

// ~~ the first applies ToInt32 Coersoion and the second 
// only works with + Integers

// parsing Numbers
var a = "42";
var b = "42px";

console.log( Number( a ));
console.log( parseInt( a ));

console.log( Number( b ));
console.log( parseInt( b ));

// use parseInt if the values on right don't matter, also pass a base as a second parameter
// Bolean Corsions 

// ! can also be used to coerce to boolean and flip the logic

// The ternary operator in JS uses implit coersion.

/// going implict

var a = [1,2];
var b= [3,4];

console.log(a+b);
// || and &&

a = 42;
b ="abc";
c = null;

console.log(a||b);
console.log(a && b);
console.log(c||b);