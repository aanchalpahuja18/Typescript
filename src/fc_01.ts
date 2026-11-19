let myName: string = "Aanchal";
console.log(`Hellooo, ${myName}`);

let numberOfWheels: number = 4;
console.log(`My vehicle has ${numberOfWheels} wheels`);

let isStudent: boolean = false;
console.log(`Is she a student? ${isStudent}`)


//Custom types:

// type Food = string;


//Nested Object Type:

type Address = {
    street: string,
    city: string,
    country: string
}

//here we are telling inside the object what all properties it will have and what would be the type of the particular property rather than providing a specific value to it.
type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address 
}

let person1: Person =  {
    name: "Aanchal",
    age: 23,
    isStudent: false
};

let person2: Person = {
    name: "Parv",
    age: 19,
    isStudent: true,
    address: {
        street: "123 Main Street",
        city: "AnyTown",
        country: "USA"
    }
}


function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);


//Typing arrays: 

//TS infers the type of elements which will come in the ages array:
let ages = [10, 20];
// ages.push(true);

//Challenge:

type Human = {
    name: string,
    age: number,
    isStudent: boolean
}

let human1: Human = {
    name: "Jack",
    age: 20,
    isStudent: true
}

let human2: Human = {
    name: "Jill",
    age: 40,
    isStudent: false
}

let humans: Human[] = [human1, human2]
// let humans = [human1, human2]

console.log("Humans are: ", humans)