// STEP 1: Print text to the browser console is string ""

console.log("Hello World!");

// STEP 2: Variables

// Store text values in variables

const userName = "Ronja";
const favoriteAnimal = "a Cat";

// Print the variables to the console

console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);

// STEP 3: User interaction

// Display a pop-up message

alert("Welcome to my beautiful website :)");

// Ask the user for their name

const visitorName = prompt("What is your name? ");

// Print the user's answer

console.log(visitorName);
console.log("Hello " + visitorName + "! Welcome!");

// Ask the user for their favorite animal

const visitorfavoriteAnimal = prompt("What is your favorite animal? ");

// Create a sentence using both answers

console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorfavoriteAnimal + ".");

// console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!

if (visitorfavoriteAnimal == "a Cat")
{console.log("Great choice! That's my favorite animal too!");}
else if (visitorfavoriteAnimal !== "a Cat")
{console.log("Nice! Your favorite animal is " + visitorfavoriteAnimal);}

// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

// const visitorFavoriteAnimal = prompt("What is your favorite animal?");