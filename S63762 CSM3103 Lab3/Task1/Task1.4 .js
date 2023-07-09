// Define the function to print numbers divisible by z
function printDivisibleNumbers(z) {
  for (var i = 1; i <= 100; i++) {
    if (i % z === 0) {
      console.log(i);
    }
  }
}

// Example usage
var givenNumber = 5;
console.log("Numbers between 1 and 100 divisible by " + givenNumber + ":");
printDivisibleNumbers(givenNumber);

// Prompt the user for input
var userInput = prompt("Enter a number:");
var parsedInput = parseInt(userInput);

// Validate user input
if (isNaN(parsedInput)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  console.log("Numbers between 1 and 100 divisible by " + parsedInput + ":");
  printDivisibleNumbers(parsedInput);
}


