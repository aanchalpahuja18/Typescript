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

//here we are mentioning inside the object what all properties it will have and what would be the type of the particular property rather than providing a specific value to it.
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


type UserRole = "guest" | "member" | "admin";

type User = {
    id:number,
    name: string,
    role: UserRole,
}

type UpdatedUser = Partial<User>

let userID = 1;

const users: User[] = [
    {id: userID++,name: "aanchal", role: "admin"},
    {id: userID++,name: "parv", role: "member"},
    // {id: 3, name: "guest_user", role: "guest"},
    // {id: 4, name: "riya", role: "admin"},
    // {id: 5, name: "praveen", role: "member"}
]

function updateUser(id: number, updates: UpdatedUser){
    let user = users.find((el) => el.id === id);    
    if(!user){
        console.log("User not found");
        return;
    }
    Object.assign(user, updates)
}

updateUser(1, {name: "ap"});
updateUser(2, {role: "admin"})

console.log("Users: ", users);

function fetchUserDetails(username: string): User {
    const user = users.find((el) => el.name === username);
    if(!user){
        throw new Error(`User with ${username} not found`)
    }
    return user;
}

console.log("Fetching user details....")
console.log(fetchUserDetails("ap"));  

function addNewUser(user: Omit<User, "id">) : User {
    const newUser: User = {id: userID++, ...user};
    users.push(newUser);
    return newUser
}

addNewUser({name: "aanchal", role: "member"})
console.log("New user added...", users);