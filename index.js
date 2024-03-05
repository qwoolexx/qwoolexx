// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to greet a person
  function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Main function that uses the helper functions
  function main() {
    const num = 5;
    const squaredNum = square(num);
  
    console.log(`The square of ${num} is: ${squaredNum}`);
  
    if (isEven(squaredNum)) {
      console.log(`${squaredNum} is an even number.`);
    } else {
      console.log(`${squaredNum} is an odd number.`);
    }
  
    const person = "John";
    console.log(greet(person));
  }
  
  // Call the main function
  main();
  