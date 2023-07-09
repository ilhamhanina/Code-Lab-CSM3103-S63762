// Define the function to compute x raised to the power y
function power(x, y) {
  if (y === 0) {
    return 1;
  } else if (y < 0) {
    return 1 / power(x, -y);
  } else if (y % 2 === 0) {
    var temp = power(x, y / 2);
    return temp * temp;
  } else {
    return x * power(x, y - 1);
  }
}

// Example usage
var base = 2;
var exponent = 5;
var result = power(base, exponent);
console.log(base + " raised to the power " + exponent + " is: " + result);

// Prompt the user for input
var userInput1 = prompt("Enter the base number:");
var userInput2 = prompt("Enter the exponent:");
var parsedInput1 = parseFloat(userInput1);
var parsedInput2 = parseFloat(userInput2);

// Validate user input
if (isNaN(parsedInput1) || isNaN(parsedInput2)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  var result = power(parsedInput1, parsedInput2);
  console.log(parsedInput1 + " raised to the power " + parsedInput2 + " is: " + result);
}
