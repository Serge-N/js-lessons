var myArm = "this is a string baby";
//Escaping literals
var myString = "I am a \"double quoated\" string inside \"double string.\"";
console.log(myString);
//use single strings
var outS = "I come first";
var s = " This is the ending string";
var final = outS+ s;

console.log(final);

//variable and string
var ourName = "FFC";

var real = "our name is "+ourName+" and we are fire.";
console.log(real);
console.log(real.length);

//get character at a specific index in a string.
console.log(outS[0]);
console.log(outS[outS.length -1]);

const wordBlanks = function(myNoun, myAdjective, myVerb, myAdverb){ 
    var result = "";
    //logic
    result = "The "+myAdjective+" "+myNoun+" "+myVerb+" "+ myAdverb+".";
    return result;
}

var solution = wordBlanks("dog", "big", "ran", "quickly");
var solution = wordBlanks("bike", "slow", "flew", "slowly");
console.log(solution);