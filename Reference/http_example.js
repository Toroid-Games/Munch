const http = require('http');
const port = 5432;
// Create server object
http.createServer((req, res) => {
    // response
    res.write('Hello macro');
    res.end();
}).listen(port, () => console.log(`Server running on port: ${port}`));
