const http = require('http');
const stats = require('./pcRamUsage');

const HOST = 'http://localhost';
const PORT = 3000;

http.createServer((req, res) => {
    let url = req.url;

    if(url === '/stats') {
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end('Working!')
    }

}).listen(PORT, () => console.log(`Server is running on ${HOST}:${PORT}, ${stats}`))