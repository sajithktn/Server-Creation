const http = require('http');
const fs = require('fs');

const data = 'This is my life';

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    fs.writeFile('data.txt', data, (err) => {
        if (err) {
            console.log("Failed to Write:", err);
            res.end("Error writing file");
            return;
        }

        res.end("File created successfully!");
    });

});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000/');
});