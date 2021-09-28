"use strict"
// Js alias ECMAscript
// think of one's js code on feature basis not version
// transpiling (transformation + compiling) use a special tool to transform your new code features into equivalent (or close!) matches that work in older
// environments.
// Polyfills (aka shims) are a pattern for defining equivalent behavior from a newer environment
// into an older environment, when possible.
// Syntax cannot be polyfilled, but APIs often can be.
// So the best strategy for keeping updated as it evolves is to just introduce polyfill shims into your code base, and a transpiler
// step into your build workflow, right now and get used to that new reality
// at the time of writing they exists ES 11.

// features

// .1

var a = 2;

(function IIFE() {
    var a = 3;
    console.log(a)
})();

console.log(a);

// see 

// let
// this can also be written as :

{
    let a = 6, b, c;
    console.log(a)
}

console.log(a);

// const 

{
    const a = 10;
    console.log(a);

    //  a++; should never change as it is a constant
}

// Constants are not a restriction on the value itself, but on the variable’s assignment of that value.

// don't rely on const for code behaviour

// Block scoped functions

{
    function foo() {
        console.log("cannot be called from outside!");
    }
}

// foo(); -> reference error hence not defined.

// Rest/ Spread the ... operator

function foo(x, y, z) {
    console.log(x, y, z);
}

foo(...[1, 2, 3]); // spreads it into individual components

// can also be used to declare an array inside another array.
var y = [2, 3, 5];
var b = [1, ...y, 4]

console.log(b.sort());

// gathers all arguments if no named one are given
function boo(x, y, ...z) {
    console.log(x, y, z);
}

boo(1, 2, 3, 4, 5);