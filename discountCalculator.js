
function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    for (let i = 0; i < quantity; i++) {
        debugger
        totalPrice += pricePerItem;
    }
    debugger

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
    debugger
}
console.log(calculateDiscountedPrice(5,10))


module.exports = calculateDiscountedPrice;