//WRITE YOUR CODE BELOW
let menu = {
    cappucino: 3.3,
    flatwhite: 3.2,
    hotchocolate: 4,
    englishtea: 2.5,
    greentea: 2.8,
    waterbottle: 2,
    orangejuice: 3
}

menuprices = Object.values(menu)

let summenu = menuprices.reduce(function(a, b){return a + b})

console.log(Object.keys(menu))
console.log("The total menu costs £",summenu)