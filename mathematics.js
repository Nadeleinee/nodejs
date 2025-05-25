const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please provide two numbers. Usage: node adder.js 5 10");
} else {
  console.log(`The sum is: ${num1 + num2}`);
  console.log(`The sum is: ${num1 - num2}`);
  console.log(`The sum is: ${num1 * num2}`);
  console.log(`The sum is: ${num1 / num2}`);
}
