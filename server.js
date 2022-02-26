const http = require('http');

const HOST = 'http://localhost';
const PORT = 3000;

http.createServer((req, res) => {
    res.end('Working!')
}).listen(PORT, () => console.log(`Server is running on ${HOST}:${PORT}`))