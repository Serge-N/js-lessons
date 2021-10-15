var o1 = {

};

var o2 = {
    _proto_: o1
}

// not the inheritance you know
Object.setPrototypeOf(o2, o1);