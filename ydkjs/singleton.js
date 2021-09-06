//If you care about only a single instance.
var foo =(function CoolModule(){
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething(){
        console.log( something );
    }

    function doAnother(){
        console.log( another.join( " ! "));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
})();

foo.doSomething();
foo.doAnother();


// classes features should be used to implement on the internal part of the api