// debug using
// 0. Console log
// 1. Debugger
// 2. Breakpoints
// 3. Observation line by line

// js re arranges statements to optimise code.

function foo() {
    console.log(b);setTimeout
    return 1;
}

var a, b, c;

// literal syntax
c = {
    get bar() {
        console.log(a);
        return 1;
    }
};

a = 10;
b = 30;

a += foo();
b += c.bar;

console.log(a + b); // how?