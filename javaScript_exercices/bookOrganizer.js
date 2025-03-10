
let books = [
    {
        title: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        releaseYear: 1925
    },
    {
        title: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        releaseYear: 1960
    },
    {
        title: "1984",
        authorName: "George Orwell",
        releaseYear: 1949
    },
    {
        title: "The Catcher in the Rye",
        authorName: "J.D. Salinger",
        releaseYear: 1951
    }
]

const sortByYear = (book1, book2) => {
    if (book1.releaseYear < book2.releaseYear) {
        return -1;
    } else if (book1.releaseYear > book2.releaseYear) {
        return 1;
    } else {
        return 0;
    }

}

let filteredBooks = books.filter(book => book.releaseYear > 1950);
filteredBooks.sort(sortByYear);


console.log(sortByYear(books[0], books[1])); // -1
console.log(sortByYear(books[1], books[2])); // 1
console.log(filteredBooks);
