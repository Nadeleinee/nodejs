const name = process.argv[2];

if (!name) {
  console.log("Please provide your name.");
} else {
  console.log(`Hello, ${name}! Welcome to Node.js CLI app.`);
}