function addBook (){
    const newBookTitle = addBookInput.value;
    const newBookConatiner = document.createElement("div");
    newBookConatiner.classList.add("book");

    const bookTitle = document.createElement("p");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = newBookTitle;
    
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-icon");

    removeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><path fill="currentColor" d="M0 264.84L335.16 600L0 935.16L264.84 1200L600 864.84L935.16 1200L1200 935.16L864.84 600L1200 264.84L935.16 0L600 335.16L264.84 0L0 264.84z"/></svg>';

    removeButton.addEventListener("click", function () {
        booksContainer.removeChild(newBookConatiner)
    });

    newBookConatiner.appendChild(bookTitle);
    newBookConatiner.appendChild(removeButton);
    booksContainer.appendChild(newBookConatiner);
}


const addBookButton = document.querySelector(".add-book-button");
const addBookInput = document.querySelector(".add-book-input");
const booksContainer = document.querySelector(".books-container");

addBookButton.addEventListener("click", addBook)
