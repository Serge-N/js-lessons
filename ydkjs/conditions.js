"use strict";

const ACCESSORY_PRICE = 9.99;

let bank_balance = 302.13;
let amount = 99.99;

amount *= 2;

if(amount < bank_balance){
    console.log("I wan to buy this phone and the accessory!");
    amount += ACCESSORY_PRICE;
} else{
    console.log("No, thanks");
}