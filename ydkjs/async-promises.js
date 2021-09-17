// in api's sometimes a promise is never returned...

// a promise has a fullfillment handler
// it alos has a rejection handler
// once a promise is resolved it stays that way foever. - an immutable vale
// a promise promotes separtion of concerns in that ithe called function is not aware of whats going on.
// the return of a promise that has a new is called the "revealing constructor"

// promises ensure trust

// promises so the problems of
// - calling the callback too early
// - calling the callback late
// - alling the calllback too many times
// - failure to pass parameters
// - no exception handling.

// Promise.resolve(..) will accept an thenable then unwrap to its non-thenable vale
// use it to gain trust.

function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, time);
    });
}

delay(100) // step 1
    .then(function STEP2() {
        console.log("step 2 (after 100ms)");
        return delay(200);
    })
    .then(function STEP3() {
        console.log("step 3 (after another 200ms)");
    })
    .then(function STEP4() {
        console.log("step 4 (next Job)");
        return delay(50);
    })
    .then(function STEP5() {
        console.log("step 5 (after another 50ms)");
    })

// Terminology

// The constructor for a promise are uslly two callbacks
// the first is usally used to mark a fullied promise
// the second a rejected promise.
// Best Practice : use reject for the second parameter and reject for the first parameter.

// Error Rejection

// use the error first-first callback style
// note that a try catch is synchronus in js

// one way of catching errors

/*
var p = Promise.resolve(42);

p.then(
    function fulfilled(msg) {
        console.log(msg.toLowerCase());
    }
).done(null, handleErrors); // <-if this handle errors fails then its error would be thrown globally.

*/

// patterns

// promise.All([...]) - Allows us to process async code parallel.
// promise.Race([...]) - aka. the Latch - drops some promises.
// both of these will fulfill if and when any Promise resolution is a fulfillment, and it
// both of these will reject if and when any Promise resolution is a rejection.
// Promises cannot be cancelled
// Promise.none() and Promise.All() - either reject all promise or accept all
// Promise.any()
// Promise.first()
// Promise.last()

//Concurrent Iterations - use map

if (!Promise.map) {
    Promise.map = function (vals, cb) {
        return Promise.all(
            vals.map(function (val) {
                return new Promise(function (resolve) {
                    cb(val, resolve);
                });
            })
        );
    };
}

var p1 = Promise.resolve(21);
var p2 = Promise.resolve(42);
var p3 = Promise.reject("Oops");
// double values in list even if they're in
// Promises

Promise.map([p1, p2, p3], function (pr, done) {
    Promise.resolve(pr)
        .then(
            function (v) {
                done(v * 2);
            },
            done
        );
}).then(function (vals) {
    console.log(vals);
});