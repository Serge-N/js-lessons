"use strict"
// a prototyped object is an object linked to another object

var anotherObject = {
    a: 2
};

var myObject = Object.create(anotherObject);

console.log(myObject.a);

// if the prototype chain ends or not found - undefined is returned

// shadowing is when a property ends on the called object and a higer linked objected.

// avoid shadowing if possible - the consequences are greater

console.log(anotherObject.hasOwnProperty("a"));
console.log(myObject.hasOwnProperty("a"));

myObject.a++; // oops, implicit shadowing!

console.log(anotherObject.a);
console.log(myObject.a);

console.log(myObject.hasOwnProperty("a"));

// keyword new hijacks any normal function

function NothingSpecial() {
    console.log("\nDon't mind me!");
}

var a = new NothingSpecial();
//var  b = NothingSpecial();

// observe this :

a;

// b;`

// inheritorio links
function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function () {
    return this.name;
}

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}

// here, we make a new `Bar.prototype`
// linked to `Foo.prototype`
Bar.prototype = Object.create(Foo.prototype);

// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!
Bar.prototype.myLabel = function () {
    return this.label;
};

var a = new Bar("a", "obj a");

console.log(a.myName()); // "a"
console.log(a.myLabel()); // "obj a"