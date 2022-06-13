let myLibrary = [];
const adder = document.querySelector("#adder");
const addbook = document.querySelector("#addbook");
const booksGrid = document.querySelector("main");
const BookMenu = document.getElementById('bookmenu');
let ReadBtns = document.querySelectorAll(".bookbtn");
let RmvBtns = document.querySelectorAll(".rmvbtn");

function book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(title, author, pages, isRead) {
    const thebook = new book(title, author, pages, isRead)
    myLibrary.push(thebook)
    createBookCard(thebook)
}

function createBookCard(book) {
    const card = document.createElement('div')
    card.classList.add('book')
    card.setAttribute("data-book-index", `${myLibrary.length-1}`)
    card.innerHTML = `
    <h3> ${book.title}</h3>
    <h3> ${book.author}</h3>
    <h3> ${book.pages} pages</h3>
    <button class="bookbtn"> Read </button>
    <button class="rmvbtn"> Remove </button>
    `
    booksGrid.appendChild(card)
    ReadBtns = document.querySelectorAll(".bookbtn");
    RmvBtns = document.querySelectorAll(".rmvbtn");
}

function refreshall() {
    myLibrary.forEach(booke => {
        console.log('hi')
        createBookCard(booke)
    })
}

addbook.addEventListener('click', () => {
    BookMenu.style.display = "flex";
})
