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
