// HUNDRED DAYS OF CODE CHALLENGE
// DAY ONE
console.log("hello world")
console.log("irene ntongwe")

// storing variables
name ="suzy smith"
console.log(name)

// operators
food = prompt("how much was the food")
tipPercentage = 0.2
tipAmount = food * tipPercentage
console.log(tipAmount)

// DAY TWO
// data types
let foo = 45; //foo is a number
foo ="bar"; //foo is now string
foo = true;

let x = 5;
let y = 5;
let z = 6;
x = y
x = z
 //foo is now a boolean which can be either true or false
let b = {firstName:"John", lastName:"Doe"}; //object

const foot = 42;
const result = foot + "1" // js coerces foot to a string, so it can be concatenated with the other operang
console.log(result)

//binding
var name = "ayda";
const greeting = "hello"
console.log(greeting + '' + name)

//conditionals
const age = 15;
const state = "idaho"
if(age >=16){
console.log("you are old enough to take a test!")
// the else if condition brings another contition different from the previousely set condition for example
}else if(age >= 15 && state === "idaho" || state === "mountana"){
console.log("you can take the test in your home state")
}else{
    console.log("you are too young to take the test")
}


// DAY THREE
// functions
console.log(Math.max(2, 4))
console.log(Math.min(8, 9))


function numbers(num1, num2){
    return num1 * num2
}

//arrow function syntag
let myfunction = () =>{

}

function alfa(c, d){
    return c + d
}
alfa(10, 2)

//OBJECTS
const person ={
    name:"mensah peace", country:"Burundi", eyes:"blue", age:39, height:1.55
}
console.log(person.name + person.age)