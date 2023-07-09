// Create the Product constructor
function Product(productName, quantity, price) {
  this.productName = productName;
  this.quantity = quantity;
  this.price = price;
}

// Add a method to calculate the total value of the product
Product.prototype.calculateTotalValue = function() {
  return this.quantity * this.price;
};

// Create a new product object
var product = new Product("Skincare Product", 10, 49.99);

// Access and display the properties
console.log("Product Name: " + product.productName);
console.log("Quantity: " + product.quantity);
console.log("Price: $" + product.price.toFixed(2));

// Calculate and display the total value
console.log("Total Value: $" + product.calculateTotalValue().toFixed(2));
