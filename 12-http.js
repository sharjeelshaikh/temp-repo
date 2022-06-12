const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>The page you are looking for isn't available</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)