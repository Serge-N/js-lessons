//use  OLOO (objects linked to other objects) instead of classes in js

var Foo = {};

var a1 = Object.create( Foo );

console.log(a1);

// check if chrome v8 uses .constructor.name to track objects

Object.defineProperty(Foo,"constructor",{
    enumerable: false,
    value: function Gotcha(){}
});

console.log(a1);