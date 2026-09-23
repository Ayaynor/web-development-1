// Exercise 1:

function showTable() {

  const animal1 = "Tiger";
  const habitat1 = "Forest";
  const diet1 = "Carnivore";

  const animal2 = "Elephant";
  const habitat2 = "Savanna";
  const diet2 = "Herbivore";
      
  const animalTable = `
    <table>
      <thead>
        <tr>
          <th>Animal</th>
          <th>Habitat</th>
          <th>Diet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${animal1}</td>
          <td>${habitat1}</td>
          <td>${diet1}</td>
        </tr>        
        <tr>
          <td>${animal2}</td>
          <td>${habitat2}</td>
          <td>${diet2}</td>
        </tr>
      </tbody>
    </table>
  `;

  const container = document.querySelector("#tableContainer");
    container.innerHTML = animalTable;
}


// Exercise 2:

const exercise2 = document.querySelector("#exercise2");

exercise2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

const exercise1 = document.querySelector("#exercise1");

exercise1.addEventListener("click", function() {
    exercise1.innerHTML = "Bye bye mouse!";
    exercise1.style.color = "red";
});


// Exercise 3:

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function() {
    status.textContent = "Kirjoitat palautetta...";
});

feedback.addEventListener("blur", function() {
    status.textContent = "";
});

feedback.addEventListener("input", function() {
    charcount.textContent = feedback.value.length + "/200";
    preview.textContent = feedback.value;
});


// Exercise 4:
const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (feedback.value.length < 10 || feedback.value.length > 200) {
        status.textContent = "Error: Feedback must be between 10 and 200 characters";
    } else {
        status.textContent = "Thank you for your feedback!";
        feedback.value = "";
    }
});

const keyinfo = document.querySelector("#keyinfo");
const keybox = document.querySelector("#keybox");

document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);

    if (keyinfo) {
        keyinfo.textContent = "Key: " + event.key + " | Code: " + event.code;
    }
    if (keybox) {
        keybox.textContent = event.key;
    }
});