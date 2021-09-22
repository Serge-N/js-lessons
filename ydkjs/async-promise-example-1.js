// use there are two operations that require async code.
// Reading from a file syetem and a request over a network
// deal with both pass , database and  failure casses

// generators and promises
// construct a promise the yield it from the generator
// let the iteraor listen for the promise resolve 
// The natural way to get the most out of Promises and generators is to yield
// a Promise, and wire that Promise to control the generator's iterator.