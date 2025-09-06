const fs = require('fs');
const path = 'data.txt';

// Check if file exists before reading
fs.access(path, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`Error: File "${path}" does not exist.`);
    return;
  }

  // Create a readable stream
  const readableStream = fs.createReadStream(path, { encoding: 'utf8' });

  // Event: when data is available
  readableStream.on('data', (chunk) => {
    console.log('Reading chunk:');
    console.log(chunk);
  });

  // Event: when stream ends
  readableStream.on('end', () => {
    console.log('Finished reading file.');
  });

  // Event: if there is an error while reading
  readableStream.on('error', (error) => {
    console.error('Error while reading the file:', error.message);
  });
});
