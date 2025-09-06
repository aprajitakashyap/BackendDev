const fs = require("fs");

// Create a readable stream for input.txt
const readableStream = fs.createReadStream("input.txt");

// Create a writable stream for output.txt
const writableStream = fs.createWriteStream("output.txt");

// Pipe the readable stream into the writable stream
readableStream.pipe(writableStream);

// Success message when done
writableStream.on("finish", () => {
  console.log("Data successfully piped from input.txt to output.txt");
});

// Handle errors
readableStream.on("error", (err) => {
  console.error("Error reading input file:", err.message);
});

writableStream.on("error", (err) => {
  console.error("Error writing to output file:", err.message);
});
