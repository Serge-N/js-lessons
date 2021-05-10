const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
    // calculate the new amount with the tax
    amt += (amt * TAX_RATE);
    // return the new amount
    return amt;
}
var amount = 99.99;
amount = calculateFinalPurchaseAmount(amount);
console.log(amount.toFixed(2));