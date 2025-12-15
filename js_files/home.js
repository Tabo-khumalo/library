const createBtn = document.querySelector(".create-btn")
const createForm = document.querySelector("form");
const saveBtn = document.querySelector("#save");
const blurFilter = document.querySelector(".overlay");
const cancelBtn = document.querySelector(".cancel-btn");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const notReadInput = document.querySelector("#not-yet");
const bookForm = document.querySelector("#bookForm");


// Functions

function removeClass(element, toRemove) {
  element.classList.remove(toRemove);
}

function addClass(element, toAdd) {
  element.classList.add(toAdd);
}

function addBlur(element, toAdd) {
  element.classList.add(toAdd);
}

function removeBlur(element, toRemove) {
  element.classList.remove(toRemove);
}

function clearForm() {
  bookForm.reset();
}



// Event Listeners



// button to cancel and close form
cancelBtn.addEventListener('click', (e) => {
  addClass(createForm, "hidden");
  removeBlur(blurFilter,"blur-overlay");
  clearForm();
})

// function to open form
createBtn.addEventListener('click', (e) => {
  removeClass(createForm, "hidden");
  addBlur(blurFilter,"blur-overlay");
});

// button to submit form
saveBtn.addEventListener('click', (e) => {
  addClass(createForm, "hidden");
  removeBlur(blurFilter, "blur-overlay");
})

// prevents form from reloading on submit
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
})



