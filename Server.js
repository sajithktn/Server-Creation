const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write('<h1> Learning Node Js </h1>');
    res.write('<h2> I wrote 1st Node js Code. </h2>');

    res.end();
})

const Port = 5001;

server.listen(Port, () =>{
    console.log(`Server is running at http://localhost:${Port}`);
});
