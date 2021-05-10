//scope is important for variables
//local variable take precdence if they have the same name
var outwear = "T-shirt";

function myStaff() {
    var outwear = "Sweater";
    return outwear;
}

console.log(myStaff());
console.log(outwear);

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(6));

//non return values return undefined functions.

//Query - simulate a que.

function nextInLine(arr, item) 
{
    arr.push(item);
    item = arr.shift();
    return item;
}

var testArr = [1,2,3,4,5];

console.log("Before: "+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: "+JSON.stringify(testArr));