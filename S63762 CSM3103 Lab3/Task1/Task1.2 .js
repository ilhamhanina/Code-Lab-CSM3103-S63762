// Define the function to calculate the sum of cubes
function calculateSumOfCubes(number1, number2) {
  var cube1 = number1 * number1 * number1;
  var cube2 = number2 * number2 * number2;
  var sum = cube1 + cube2;
  return sum;
}

var number1 = 3;
var number2 = 4;
var sumOfCubes = calculateSumOfCubes(number1, number2);
console.log("The sum of cubes of " + number1 + " and " + number2 + " is: " + sumOfCubes);

// Prompt the user for input
var userInput1 = prompt("Enter the first number:");
var userInput2 = prompt("Enter the second number:");
var parsedInput1 = parseFloat(userInput1);
var parsedInput2 = parseFloat(userInput2);

// Validate user input
if (isNaN(parsedInput1) || isNaN(parsedInput2)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  var sum = calculateSumOfCubes(parsedInput1, parsedInput2);
  console.log("The sum of cubes of " + parsedInput1 + " and " + parsedInput2 + " is: " + sum);
}


