// this includes arrays, strings and numbers

// arrays
// you don't need to presize your arrays.

// avoid empty slots

// reserve arrays for numerical uses only - for keys and props use objects

function foo(){
    var arr = Array.prototype.slice.call( arguments );
    arr.push ( "bam" );
    console.log( arr );
}

foo("bar","baz" );

// slice() with no parameters by default makes an entirely new shallow copy of the array.

// strings, numbers are assigned/passed by values

// objects are are passed by reference, and this reference is values only.