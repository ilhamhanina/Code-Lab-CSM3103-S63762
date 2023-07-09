// Define the function to reverse a number
function reverseNumber(number) {
  var reversedNumber = 0;
  while (number !== 0) {
    reversedNumber = (reversedNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return reversedNumber;
}

var number = 12345;
var reversed = reverseNumber(number);
console.log("The reversed number of " + number + " is: " + reversed);

// Prompt the user for input
var userInput = prompt("Enter a number to reverse:");
var parsedInput = parseFloat(userInput);

// Validate user input
if (isNaN(parsedInput)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  var reversedInput = reverseNumber(parsedInput);
  console.log("The reversed number of " + parsedInput + " is: " + reversedInput);
}


