var foo = {
    somemthing: function () {
        console.log("Tell me somethin wonderfull..");
    }
};

var bar = Object.create(foo);

bar.somemthing();

// avoid magic apperenaces in APIs by using internal delegation

var anotherObject = {
    cool: function(){
        console.log("cool!");
    }
};

var myObject = Object.create( anotherObject );

myObject.doCool = function(){
    this.cool();
}

myObject.doCool();