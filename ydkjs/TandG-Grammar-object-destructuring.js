function getData() {
  return {
    a: 42,
    b: "foo"
  };
}

var { a, b } = getData();

console.log(a, b);

// this was formly written as :

var res = getData();
var c = res.a;
var d = res.b;

console.log(c, d);

// it can also be used for named function arguments

function foo({ a, b, c }) {
  // a long time ago, this would have been
  // var a = obj.a, var b = obj.b , c = obj.c
  console.log(a, b, c);
}

foo({
  c: "object",
  a: "hello",
  b: "destructing"
});