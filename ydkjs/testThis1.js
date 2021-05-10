function foo() {
    console.log( this.a );
}

var a = 3;

(function () {
    "use strict";
    
    foo();
})();