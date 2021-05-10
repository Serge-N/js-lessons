var prefix = "foo";

//the are computed.
var myObject ={
    [prefix + "bar"] : "hello",
    [prefix + "baz"] : "world"
}

//output
console.log( myObject["foobar"] );
console.log( myObject["foobaz"] );