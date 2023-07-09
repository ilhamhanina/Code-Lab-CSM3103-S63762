// Create the Book constructor
function Book(bookName, authorName) {
  this.bookName = bookName;
  this.authorName = authorName;
}

// Add the prototype property Price
Book.prototype.price = 0;

// Add a method to set the price of the book
Book.prototype.setPrice = function(price) {
  this.price = price;
};

// Add a method to get the formatted price
Book.prototype.getFormattedPrice = function() {
  return "$" + this.price.toFixed(2);
};

// Create a new book object
var book = new Book("Front End for Beginner", "Ilham Hanina");

// Access and display the properties
console.log("Book Name: " + book.bookName);
console.log("Author Name: " + book.authorName);
console.log("Price: " + book.getFormattedPrice());

// Set the price of the book
book.setPrice(49.99);

// Display the updated price
console.log("Updated Price: " + book.getFormattedPrice());
