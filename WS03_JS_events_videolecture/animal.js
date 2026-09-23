const animalButton = document.querySelector("#animalButton");

animalButton.addEventListener("click", function() {
    alert("They're cute!");
});



const animalTitle = document.querySelector("#animalTitle");

animalTitle.addEventListener("click", function() {
    animalTitle.textContent = "My favourite animal is a cat!";
    animalTitle.style.color = "purple";
});



const animalImage = document.querySelector("img");

animalImage.addEventListener("mouseover", function() {
    console.log("Mouse was over the image");
});



const animalInput = document.querySelector("#animalInput");
const animalOutput = document.querySelector("#animalOutput");

animalInput.addEventListener("input", function() {
    animalOutput.textContent = animalInput.value;
});

animalInput.addEventListener("focus", function () {
    console.log("Input is focused");
});

animalInput.addEventListener("blur", function () {
    console.log("Input lost focused");
});



const animalForm = document.querySelector("#animalForm");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    animalOutput.textContent = "Your favourite animal is: " + animalInput.value;
    console.log("Form submitted with animal: " + animalInput.value);
});



document.addEventListener("keydown", function (event) {
    console.log("Key pressed; " + event.key);
    console.log("Key code: " + event.code);
});


// Exercise 5:

const keyinfo = document.querySelector("#keyinfo");
const keybox = document.querySelector("#keybox");

document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);

    keyinfo.textContent = "Key: " + event.key + " | Code: " + event.code;

    keybox.textContent = event.key;
});