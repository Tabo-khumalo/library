const createBtn = document.querySelector(".create-btn");
const createForm = document.querySelector("form");
const saveBtn = document.querySelector("#save");
const blurFilter = document.querySelector(".overlay");
const cancelBtn = document.querySelector(".cancel-btn");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read").checked;
const notReadInput = document.querySelector("#not-yet");
const bookForm = document.querySelector("#bookForm");
const cardContainer = document.querySelector(".card-container");
let myLibrary = [];


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

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function removeBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
    displayBooks();
}

function displayBooks() {

  cardContainer.innerHTML = "";

  myLibrary.forEach((book) => {

    // card container
    const card = document.createElement("div")
    card.classList.add("card");
    card.setAttribute('data-id', book.id);

    // title div and title
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title");

    const title = document.createElement("h4");
    title.textContent =`Title: ${book.title}` ;

    card.appendChild(titleContainer);
    titleContainer.append(title);

    // author div and author
    const authorContainer = document.createElement("div");
    authorContainer.classList.add("author");

    const author = document.createElement("p")
    author.textContent = `Author: ${book.author}`;

    card.appendChild(authorContainer);
    authorContainer.appendChild(author);

    // pages div and pages

    const pagesContainer = document.createElement("div");
    pagesContainer.classList.add("pages");

    const pages = document.createElement("p")
    pages.textContent = `Pages: ${book.pages}`;

    card.appendChild(pagesContainer);
    pagesContainer.appendChild(pages)

    // check if book is 
    const readStatusContainer = document.createElement("div");
    readStatusContainer.classList.add("readStatuses");

    const readStatus = document.createElement("p");
    readStatus.textContent = `Read: ${book.read ? "Yes" : "No"}`;

    card.appendChild(readStatusContainer);
    readStatusContainer.appendChild(readStatus);
   
    // remove btn container and remove btn

    const removeBtnContainer = document.createElement("button");
    removeBtnContainer.classList.add("removeBtnCont");

    const removeBtn = document.createElement("button")
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("removeBtn");

    card.appendChild(removeBtnContainer);
    removeBtnContainer.appendChild(removeBtn)

    removeBtn.addEventListener('click', () => {
      removeBook(book.id);
    });

    // card container

    cardContainer.appendChild(card);
  })
};

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
  addBookToLibrary(title.value, author.value, pages.value, read.checked);
  console.log(title.value);
  clearForm();
})

// prevents form from reloading on submit
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
})


// Construtor Function

function Book(title, author, pages, read){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.id = crypto.randomUUID();
}


displayBooks()



