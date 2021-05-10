//Function example
const square = function (a) {
    return a * a;
};

console.log(square(9));
//parameterless function
const makeNoise = function () {
    console.log("Pling!");
};

makeNoise();

//multiple parameters
const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));

//All functions that don't return anything return undefined

//functions with variable names same as the global one only see their variable

//Nested functions
const hummus = function (factor) {

    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }

        console.log(ingredientAmount + " " + unit + " " + name);
    };

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);

//short notation
function squar(x) {
    return x * x;
}

console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}
//fucntions are automatically called on top of their scope

//Lambda or arrow functions

const pow = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(pow(2, 10));

let a = 0;

function chicken() {
    console.log("Called " + a + " times.");
    return egg();

}

function egg() {
    a++;
    return chicken();
}
//stackoverflow - avoid
//console.log(chicken() + " came first.");

//Optional Parameters

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));

console.log(minus(10, 5));


// Define f to hold a function value
const f = function (a) {
    console.log(a + 2);
};
// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}
// A less verbose function value
let h = a => a % 3;