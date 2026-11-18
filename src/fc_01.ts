let myName: string = "Aanchal";
console.log(`Hellooo, ${myName}`);

let numberOfWheels: number = 4;
console.log(`My vehicle has ${numberOfWheels} wheels`);

let isStudent: boolean = false;
console.log(`Is she a student? ${isStudent}`)


//Custom types:

// type Food = string;

//here we are telling inside the object what all properties it will have and what would be the type of the particular property rather than providing a specific value to it.
type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

let person1: Person =  {
    name: "Aanchal",
    age: 23,
    isStudent: false
};

let person2: Person = {
    name: "Parv",
    age: 19,
    isStudent: true
}
