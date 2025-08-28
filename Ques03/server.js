const http = require('http');
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
    });

    const PORT = 3000;
    server.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
});