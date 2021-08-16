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