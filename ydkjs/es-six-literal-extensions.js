// example
var x = 2, y = 3;

o = {
    x,
    y,
    // the new way
    f() {

    },
    // the old way
    g: function () {

    }
    // use the new way if to not:
    // do recursion
    // binding and unbinding
};

// getters and setters

var ob = {
    _id: 10,
    get id() { return this._id++; },
    set id(v) { return this._id = v; }
};

console.log("Get :", ob._id);
console.log("Get Prop:", ob.id);
console.log("Set to 10.");

o.id = 15;
console.log("Get :", ob._id);
console.log("Get Prop:", ob.id);
