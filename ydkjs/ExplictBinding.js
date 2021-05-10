//explict binding
function foo(){
    console.log( this.a );
}

var obj = {
    a: 2
};

foo.call( obj );

//hard binding
function foo(){
    console.log( this.a );
}

var objo = {
    a: 4
}

var bar = function(){
    foo.call( objo );
};

bar();

//check if this value is not overridden
 setTimeout(bar, 100);

// bar.call( window ); does not work in node

//