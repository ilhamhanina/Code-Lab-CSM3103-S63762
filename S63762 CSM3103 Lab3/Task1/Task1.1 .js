// Define the square calculation function
function calculateSquare(number) {
  return number * number;
}

// Prompt the user for input
var userInput = prompt("Enter a number to calculate its square:");
var parsedInput = parseFloat(userInput);

// Validate user input
if (isNaN(parsedInput)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  var square = calculateSquare(parsedInput);
  console.log("The square of " + parsedInput + " is: " + square);
}
