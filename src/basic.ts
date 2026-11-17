//Inferencing: TS automatically understood that the datatype of name has to be string so after that it doesn't allow us to put any other value apart from string to this variable.
let name = "Aanchal";
console.log("Hello", name)

name = "Parv"; //works well since it is a string
// name = 2; doesn't work since it is a number

//Annotation: Here we explicitly specify the datatype we want the variable to have:

let username: string = "Aanchal";
console.log("Hello", username)
// username = "Parv"
// username = 2