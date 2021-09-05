// var a = /+foo/; // invalid because regex throws an early error.

// console.log(a);

// use strick mode;

// ES 6 uses TDZ

// never ever refer to a named parameter and its corresponding arguments at the same time.

function foo() {
  try {
        return 42;
  }
  finally {
        console.log("Hello");
  }

  console.log("This cold never runs!");
}

console.log( foo() ); 

// finally excutes before try
// finaly overides try if return is explictly stated.