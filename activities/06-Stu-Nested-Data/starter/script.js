//WRITE YOUR CODE BELOW


let sizes = ["Small",",Medium","Large"]
let milks = ["Whole Milk","Oat Milk","Almond Milk"]


let Cappucino = {
    name:"Cappucino",
    price:3.3,
    sizeoptions: sizes,
    milkoptions: milks,
    iced: false,
    sugar: true
}

let Flatwhite = {
    name:"Flat White",
    price:3.2,
    sizeoptions: sizes,
    milkoptions: milks,
    iced: false,
    sugar: true
}

let Orangejuice = {
    name:"Orange Juice",
    price:4,
    sizeoptions: sizes,
}

let drinks = [
    Cappucino, Flatwhite, Orangejuice
]

let menu = {
    drinks: drinks,
    food: ["Bagel", "Muffin", "Croissant"],
    Milks: milks,
    Sizes: sizes
}

console.log("The price of a Cappucino is £",menu.drinks[0].price)
console.log("The price of a Cappucino and an Orange Juice is £",(menu.drinks[0].price+menu.drinks[2].price))

