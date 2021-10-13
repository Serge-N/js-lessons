function identify(){
    return this.name.toUpperCase();
}

function speak(){
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
}

var me = {
    name: "kyle"
};

var you = {
    name: "serge"
};

identify.call( me );
identify.call( you );

speak.call( me );
speak.call( you );