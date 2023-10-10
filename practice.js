let dishData = [{
    name: "Italian Pasta",
    price: 9.55
},
{
    name: "Rice with Veggies",
    price: 8.65
},
{
    name: "Chicken with potatoes",
    price: 15.55
},
{
    name: "Vegetarian Pizza",
    price: 6.45
}
];

const tax = 0.2;

function getBill(boolValue){
    let finalValue;
    if(boolValue === true){
        console.log("Prices with 20% tax:")
        for(let menu of dishData){
            finalValue = menu.price + (menu.price * tax);
            console.log(`Dish: ${menu.name} Price (incl.tax): $${finalValue}`);
        }
    }
    else{
        console.log("Price Without tax");
        for(let menu of dishData){
            console.log(`Dish: ${menu.name} Price: $${menu.price}`);
        }
    }
}

getBill(true);
getBill(false);