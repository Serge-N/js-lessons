//context is a work aroound for having not use bind.
function foo (el){
    console.log( el, this.id );
}

var obj = {
    id: "awesome"
};

//use obj as this for foo calls
[1, 2, 3].forEach(foo, obj );
