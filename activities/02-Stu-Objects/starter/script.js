//WRITE YOUR CODE BELOW
let customerOrder = {
    personName: "Jenny",
    drinkName: "Flat White",
    numbersugar: 2,
    orderReady: false
}

console.log("Your ordered",customerOrder.drinkName,"with",customerOrder.numbersugar,"sugar(s)")

if (customerOrder.orderReady) {
    console.log("Ready for pick-up")
} else {
    console.log("Still in order queue")
}