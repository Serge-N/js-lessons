// use there are two operations that require async code.
// Reading from a file syetem and a request over a network
// deal with both pass , database and  failure casses

// generators and promises
// construct a promise the yield it from the generator
// let the iteraor listen for the promise resolve 
// The natural way to get the most out of Promises and generators is to yield
//  a Promise, and wire that Promise to control the generator's iterator.
// ES 7 supports asnc and await
// write optimal code senting request in parallel if possible.
// make both requests "in parallel," and
// wait until both promises resolve

// hide promise based code for clean approach. e.g

// normal function 
function bar(url1, url2) {
    return Promise.all([
        request(url1),
        request(url2)
    ]);
}

function* foo() {
    var results = yield bar(
        "http://some.url.1",
        "http://some.url.2"
    );

    var r1 = results[0];
    var r1 = results[1];

    var r3 = yield request (
        "http://some.url.3/?v=" + r1 + "," + r2
    );

    console.log(r3);
}

// utility i.e a generator with an iterator
run (foo);

// a generator can be used to call another genertaor

// Conclusion skip to last book.  
// Come back and continue here only condition that deeper practical understanding is attentained. - water too deep. 
