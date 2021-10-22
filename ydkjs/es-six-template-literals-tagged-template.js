function foo(strings, ...values) {
    console.log(strings);
    console.log(values);
}

var desc ="awesome";

foo `Everything is ${desc}!`;

// use String.raw to view raw string , that is, i.e include literal charaters