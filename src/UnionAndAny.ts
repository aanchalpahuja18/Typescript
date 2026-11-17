//Union: 
let subs: string | number = 10;
subs = "1M";

let airlineSeat: "aisle" | "middle" | "window";
airlineSeat = "aisle";

let apiRequest: "pending" | "error" | "success";
apiRequest = "error";

//Any:

let currentOrder: any; 

let orders = ["10", "20", "30", "40", "50"];

for(let order of orders) {
    if(order === "20"){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);