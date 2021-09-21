// an iterartor is a well designed interface for steping through a series of values from a producer.
// a producer is a function that produce values based on the previous valeu

var something = (function () {
    var nextVal;

    return {
        // needed for "for..of" loops
        [Symbol.iterator]: function () { return this; },

        // standard iterator interfacemehod
        next: function () {
            if (nextVal === undefined) {
                nextVal = 1;
            }
            else {
                nextVal = (3 * nextVal) + 6;
            }

            return { done: false, value: nextVal };
        }
    }
})();

console.log(`value: ${something.next().value}`);
console.log(`value: ${something.next().value}`);
console.log(`value: ${something.next().value}`);
console.log(`value: ${something.next().value}`);

// the ilterator can run in a for loop

for(var v of something){
    console.log(v);

    if(v>1000){
        break;
    }
}

// the for ..of automatically callsthe iterator
// arrays have inbuilt iterators
// use object.keys(obj) to iterate over props of an object
// use for of not for in because for includes the chains in the Prototype chains.