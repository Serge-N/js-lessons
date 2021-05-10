"use strict";

const TAX_RATE = 0.09; //8% Sales Tax;

let amount = 99.99;

amount *=2;

amount += (amount*TAX_RATE);

console.log(amount);
console.log(amount.toFixed(2));