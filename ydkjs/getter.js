var myObject = {
    // define a getter for "a"
    get a(){
        return this._a_;
     },
    // define a setter for "a"
    set a(val){
        this._a_ = val*2;
    }
};

myObject.a = 2;

console.log(myObject.a);


