"use strict"
// js uses base 10 literal decimals.

var b = .45;

var a = 42. // avoid this, although valid

var c = 5E10;

var d = c.toExponential();

var f = 42.47;



console.log(b);
console.log(a);
console.log(c);
console.log(d);
console.log(f.toFixed(1));  // toPricison can also be used.


// hexademical can also be used to represent numbers.

var n = 0o263;  // use the predicate with lower case to avoid confusion

console.log(n);

// be careful with fractional decimal values - use epsilon when comparing

function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON;
}

var m = 0.1 + 0.2;
var o = 0.3;

console.log("Close enough: " + numbersCloseEnoughToEqual(m, o));

console.log("Close enough: " + numbersCloseEnoughToEqual(.0000001, .0000002));

// use big number utility when dealing with big number utiliy