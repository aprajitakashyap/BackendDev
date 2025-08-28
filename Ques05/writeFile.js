const fs = require("fs");

// Create a writable stream
const writableStream = fs.createWriteStream("output.txt");

// The string to write
const data = "Hello, Node.js!";

// Write the data
writableStream.write(data, "utf8");

// End the stream
writableStream.end();

// Handle finish event
writableStream.on("finish", () => {
  console.log("Data written successfully to output.txt");
});

writableStream.on("error", (err) => {
  console.error("Error writing to file:", err);
});
