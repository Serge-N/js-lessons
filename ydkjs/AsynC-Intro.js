function now(){
    return 21;
}

function later(){
    answer *= 2;
    console.log( "Meaning of life : ", answer ); 
}

var answer = now();

setTimeout(later, 1000);

// Event Loops 
// Think of it terms of FIFO
//  Js is a single threaded language that takes advantage of its host environment.

// concurrency

// a single thread loop is an example of concurrency