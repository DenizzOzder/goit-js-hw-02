console.log("JS1 -----------------------------------");
function makeTransaction(quantity, pricePerDroid, customerCredits)
{
    const totalprice = quantity*pricePerDroid;
    if (totalprice <= customerCredits)
    {
        return `You ordered ${quantity} droids worth ${totalprice} credits!`;
    }
    else{
        return `Insufficient funds!`;
    }
}
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"