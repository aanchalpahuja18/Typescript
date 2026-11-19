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

const menu: Pizza[] = [
    {   
        id: 1,
        name: "Margherita", 
        price: 8
    },
    {
        id: 2,
        name: "Pepporoni", 
        price: 10
    },
    {
        id: 3,
        name: "Hawaiian", 
        price: 10
    },
    {
        id: 4,
        name: "Veggie", 
        price: 9
    }
]

let cashInRegister = 100;
let orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(newPizza: Pizza) {
    menu.push(newPizza);
    // console.log(menu);
}

addNewPizza({id: 5,name: "Cheese", price: 10})

function placeOrder(pizzaName: string) {
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



function completeOrder(orderId:number) {
    let order = orderQueue.find(el => el.orderId === orderId);
    if(!order){
        console.log(`Couldn't find your #${orderId} in the order queue`);
        return
    }
    console.log(order);
    order.status = "completed";
    return order;
}

console.log(completeOrder(3))