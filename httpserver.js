const {Console} = require('console');

const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is Kiran Magar</h1><p> Nice to meet you.</p>');
})

server.listen(port, ()=>{
    console.log(`server is running on the port ${port}`);
});