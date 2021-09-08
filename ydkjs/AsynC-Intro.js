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