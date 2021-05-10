//Create a function that behaves like Math.min();

const Min = function (a, b){
    
    if (isNaN(a)|| isNaN(b)) {
        return NaN;
    }
    

    if (a > b) {
        return b;
    } 
    
    if (a<b) {
        return a;
    } 
    
    if (a === b) {
        return a;
    } 
}

//Testing the function

console.log(Math.min(45, 45));
console.log(Min(45,45));