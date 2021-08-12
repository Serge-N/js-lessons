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

console.log( JSON.stringify(e) );