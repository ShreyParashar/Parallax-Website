const fs = require('fs');
const console = require('console');
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if(req.url === '/'){
        const data = fs.readFileSync('parallax website.html');
        res.end(data.toString());
    }else if(req.url === '/about'){
        res.end('<h1>About Page</h1>');
    }else if(req.url === '/contact'){
        res.end('<h1>Contact Page</h1>');
    }else{
        res.end('<h1>404 Page Not Found</h1>');
    }
});
server.listen(port, () => {
    console.log(`Server running at port ${port} `);
});


