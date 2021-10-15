// super is locked statstically to object 1
var object1 = {
    foo() {
        console.log("o1 : foo");
    }

};

var object2 = {
    foo() {
        super.foo();
        console.log("o2 : foo");
    }
};

Object.setPrototypeOf(object2, object1);
object2.foo();