// HUNDRED DAYS OF CODE CHALLENGE
// DAY ONE
console.log("hello world")
console.log("irene ntongwe")

// storing variables
name = "suzy smith"
console.log(name)

// operators
food = prompt("how much was the food")
tipPercentage = 0.2
tipAmount = food * tipPercentage
console.log(tipAmount)

// DAY TWO
// data types
let foo = 45; //foo is a number
foo = "bar"; //foo is now string
foo = true;

let x = 5;
let y = 5;
let z = 6;
x = y
x = z
//foo is now a boolean which can be either true or false
let b = { firstName: "John", lastName: "Doe" }; //object

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
if (age >= 16) {
    console.log("you are old enough to take a test!")
    // the else if condition brings another contition different from the previousely set condition for example
} else if (age >= 15 && state === "idaho" || state === "mountana") {
    console.log("you can take the test in your home state")
} else {
    console.log("you are too young to take the test")
}


// DAY THREE
// functions
console.log(Math.max(2, 4))
console.log(Math.min(8, 9))


function numbers(num1, num2) {
    return num1 * num2
}
//multy line functions
function sentencemaker(){
let firstpart = "i am the beginner";
let secondpart = "and i am the end of the sentence";
return firstpart + secondpart;
}
let fullsentence = sentencemaker();
fullsentence


function dreamMaker(){
    let num = 50;
    num = num * 2;
    return "i want to leave until am " + num
   
}
// let result = dreamMaker();

function greetings(){
return 'hello icy'
}
// let result = greeting()

//arrow function syntag
let myfunction = () => {

}

function alfa(c, d) {
    return c + d
}
alfa(10, 2)

//OBJECTS
const person = {
    name: "mensah peace", country: "Burundi", eyes: "blue", age: 39, height: 1.55
}
console.log(person.name + person.age)


// day four
//Event
//Let's look at a simple example of what we mean here. In the following example, we have a single <button>, which when pressed, makes the background change to a random color:



const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);

//form prevent default
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
    if (fname.value === '' || lname.value === '') {
        e.preventDefault();
        para.textContent = 'You need to fill in both names!';
    }
});

//Day 5
//string method
let text = "abcdefghijklmnopqrstuvwxyz"
let length = text.length
console.log(length)


let sentence = "i love programming";
let len = sentence.length;
console.log(len)

let language = "php";
let lent = language.length;
console.log(lent)

//replace method
const captain = "tall short";
let results = captain.replace('c', 't');
console.log(results)

const message = "ball bat";

// replace the first b with c
let resultss = message.replace('b', 'c');
console.log(resultss);

// Output: call bat