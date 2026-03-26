/*შექმენი კლასი Library, რომელსაც ექნება:

books (მასივი)

მეთოდები:

addBook(book) ამატებს არგუმენტად გადაცემულ წიგნს სიის ბოლოში
bookList() --- ბეჭდავს სიას იმის შემდეგ რაც წიგნი დაემატა*/

class Library{
    constructor(){
        this.books = []
    }

    addBook(book){
        this.books.push(book);

    }
    bookList(){
        console.log(this.books);
    }
};

const newBook = new Library();

newBook.addBook("wigni2");
newBook.bookList();