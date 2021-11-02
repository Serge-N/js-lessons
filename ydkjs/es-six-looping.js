// for ... of -> produces values
// for ... in -> produces indexs

var a = ["a", "b", "c", "d", "e", "f"];

for (var idx in a) {
    console.log(idx);
}

for(var val of a){
    console.log(val);
}