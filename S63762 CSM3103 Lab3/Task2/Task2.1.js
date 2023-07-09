// Define the function to find the sum of digits
function findSumOfDigits(number) {
  var sum = 0;
  var digits = number.toString().split('');
  
  for (var i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  
  return sum;
}

// Example usage
var number = 12345;
var sumOfDigits = findSumOfDigits(number);
console.log("The sum of digits of " + number + " is: " + sumOfDigits);

// Prompt the user for input
var userInput = prompt("Enter a number to find the sum of its digits:");
var parsedInput = parseFloat(userInput);

// Validate user input
if (isNaN(parsedInput)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  var sum = findSumOfDigits(parsedInput);
  console.log("The sum of digits of " + parsedInput + " is: " + sum);
}


