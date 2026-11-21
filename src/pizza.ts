type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    orderId: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let menuItemId = 1;

const menu: Pizza[] = [
    {   
        id: menuItemId++,
        name: "Margherita", 
        price: 8
    },
    {
        id: menuItemId++,
        name: "Pepporoni", 
        price: 10
    },
    {
        id: menuItemId++,
        name: "Hawaiian", 
        price: 10
    },
    {
        id: menuItemId++,
        name: "Veggie", 
        price: 9
    }
]

let cashInRegister = 100;
let orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(newPizza: Omit<Pizza, "id">): Pizza {
    const pizza: Pizza = {
        id: menuItemId++,
        ...newPizza
    }
    menu.push(pizza);
    console.log(menu);
    return pizza;
}

console.log("New pizza added: ", addNewPizza({name: "Cheese", price: 10}));
addNewPizza({name: "Cheese Burst", price: 10})
addNewPizza({name: "Indie Tandori Paneer", price: 10})
addNewPizza({name: "Golden corn fresh pan", price: 8})

function placeOrder(pizzaName: string): Order | undefined {
    let pizzaObj = menu.find((el) => el.name === pizzaName)
    let newOrder: Order;
    if(pizzaObj){
        console.log("Pizza found", pizzaObj);
        cashInRegister += pizzaObj.price;
        console.log("Updated cash is: ", cashInRegister)
        newOrder = {orderId: nextOrderId++, pizza: pizzaObj, status: "ordered"}
        orderQueue.push(newOrder)
    }
    else{
        console.error(`${pizzaName} is not available in the menu`);
        return;
    }
    return newOrder;
}

let orderedItem = placeOrder("Margherita");
console.log(orderedItem)
let orderedItem2 = placeOrder("Cheese");
console.log(orderedItem2)



function completeOrder(orderId:number): Order | undefined {
    let order = orderQueue.find(el => el.orderId === orderId);
    if(!order){
        console.log(`Couldn't find your #${orderId} in the order queue`);
        return
    }
    console.log(order);
    order.status = "completed";
    return order;
}

console.log(completeOrder(2))



function getPizzaDetail(id: string | number): Pizza | undefined {
    let pizza;
    if(typeof id === "number") {
        pizza = menu.find((el) => el.id === id);
        if(!pizza) {
            console.log(`Sorry we don't have the pizza with id: ${id}`);
            return;
        }
        return pizza;
    }
    else if(typeof id === "string"){
        pizza = menu.find((el) => el.name.toLowerCase() === id.toLowerCase());
        if(!pizza) {
            console.log(`Sorry we don't have the ${id} pizza`);
            return;
        }
        return pizza;
    }
    else{
        throw new TypeError(`Parameter id must be either number or string type.`)
    }
}

console.log("Getting the pizza ready...")
console.log(getPizzaDetail(2));
console.log(getPizzaDetail("Veggie"));
console.log(getPizzaDetail("Paneer"));

console.log(getPizzaDetail(10));