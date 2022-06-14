let myLibrary = [];
const adder = document.querySelector("#adder");
const addbook = document.querySelector("#addbook");
const booksGrid = document.querySelector("main");
const BookMenu = document.getElementById('bookmenu');
let ReadBtns = document.querySelectorAll(".bookbtn");
let RmvBtns = document.querySelectorAll(".rmvbtn");
const CancelAdd = document.querySelector('#CancelAdd');
const SubmitAdd = document.querySelector('#SubmitAdd');
const Booktitle = document.querySelector('#booktitle');
const Bookauthor = document.querySelector('#bookauthor');
const Bookpages = document.querySelector('#bookpages');
const ReadBool = document.querySelector('#ReadBool');
const WarnFill = document.querySelector('#warnfill');
let booknumber = 0;

function book(title, author, pages, isRead, booknum) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.index = booknum
}

function addBookToLibrary(title, author, pages, isRead) {
    const thebook = new book(title, author, pages, isRead, booknumber)
    myLibrary.push(thebook)
    createBookCard(thebook)
    booknum++;
}

function createBookCard(book) {
    const card = document.createElement('div')
    card.classList.add('book')
    card.innerHTML = `
    <h3> ${book.title}</h3>
    <h3> ${book.author}</h3>
    <h3> ${book.pages} pages</h3>
    `
    card.setAttribute("data-book-index", `${book.index}`)
    let readbtner = document.createElement('button');
    let rmvbtner = document.createElement('button');
    rmvbtner.innerText = "Remove";
    readbtner.classList.add('bookbtn');
    if (book.isRead === true) {
        readbtner.style.backgroundColor = "rgb(196, 68, 68)";
        readbtner.innerText = "Not Read";
    }
    else {
        readbtner.style.backgroundColor = "rgb(16, 146, 66)"
        readbtner.innerText = "Read";
    }
    rmvbtner.classList.add('rmvbtn');
    card.appendChild(readbtner)
    card.appendChild(rmvbtner)
    booksGrid.appendChild(card)
    ReadBtns = document.querySelectorAll(".bookbtn");
    RmvBtns = document.querySelectorAll(".rmvbtn");
    setBtns();
}

addbook.addEventListener('click', () => {
    BookMenu.style.display = "flex";
})

CancelAdd.addEventListener('click', ()=> {
    BookMenu.style.display = "none";
    WarnFill.setAttribute("style", "display:none;")
})

SubmitAdd.addEventListener('click', ()=> {
    if (Bookauthor.value === "" || Bookpages.value === "" || Booktitle.value === "") {
        WarnFill.setAttribute("style", "display:block;")
    }
    else {
        addBookToLibrary(Booktitle.value, Bookauthor.value, Bookpages.value, ReadBool.checked)
        BookMenu.style.display = "none";
    }
})

function setBtns() {
    ReadBtns.forEach(Btn => {
        Btn.addEventListener('click', ()=> {
            let BtnC = window.getComputedStyle(Btn).getPropertyValue('background-color');
            if (BtnC === "rgb(16, 146, 66)") {
                Btn.setAttribute("style", "background:rgb(196, 68, 68);")
                Btn.innerText = "Not Read"
            }
            else {
                Btn.setAttribute("style", "background:rgb(16, 146, 66);")
                Btn.innerText = "Read"
            }
        })
    })
    RmvBtns.forEach(Btn => {
        Btn.addEventListener('click', ()=> {
            let indexe = Btn.parentElement.getAttribute('data-book-index');
            Btn.parentElement.remove();
            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].index === indexe) {
                    myLibrary.splice(i, 1);
                }
            }
        })
    })
}