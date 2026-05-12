// Http & file sys modules
import http from 'http';
import fs from 'fs';

// Port to listen to
const PORT = 3030;
const URL = 'http://localhost:3030';

// Create server
const server = http.createServer((request, response) => {
    
    // Debug
    const reqUrl = request.url;
    console.log('Request at', URL + reqUrl);

    // HTML file
    const htmlDoc = fs.readFileSync('../index.html');

    response.writeHead(200, {'Content-Type': 'html'});
    response.end(htmlDoc);
});

// Listen and log
server.listen(PORT);
console.log(`Server listening at ${URL}/`);