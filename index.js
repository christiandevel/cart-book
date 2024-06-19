const LIST_BOOKS = []

document.addEventListener('DOMContentLoaded', function () {
	const BOOK_NAME = document.getElementById('book_name')
	const addBookButton = document.getElementById('add_book')
	addBookButton.addEventListener('click', function () {
		if (BOOK_NAME.value !== '') {
			addBook(BOOK_NAME.value)
		} else {
			alert('Please enter book name')
		}
	})

	BOOK_NAME.addEventListener('keypress', function (e) {
		if (e.key === 'Enter' && BOOK_NAME.value !== '') {
			addBook(BOOK_NAME.value)
		}
	})
})


function addBook(book) {
	console.log(book)
	if (LIST_BOOKS.length < 5) {
		LIST_BOOKS.unshift(book)
		rederListBook()
	} else {
		removeLastBook()
		addBook(book)
	}
}

function removeLastBook() {
	LIST_BOOKS.pop()
}

function rederListBook() {
	const listBook = document.getElementById('list_book')
	listBook.innerHTML = ''
	for (const iterator of LIST_BOOKS) {
		const li = document.createElement('li')
		li.textContent = iterator
		listBook.appendChild(li)
	}
	renderCountBook()
	document.getElementById('book_name').value = ''
}

function renderCountBook() {
	const countBook = document.getElementById('count_book')
	countBook.textContent = `Count book: ${LIST_BOOKS.length}`
}
