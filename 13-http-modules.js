const http = require('http')
//now setting up a server (req stands for user request)
const server = http.createServer((req,res)=>{
//setting up a response to the request
console.log(req)
if(req.url === '/'){
    console.log(req)
    res.end("Ciaociao")
    //we can use res.end instead of res.write()
}
if(req.url === '/about'){
res.write('Home page')
}
res.end('<h1> CIAO ciao </h1> <p>Content</p>')
})
//now we specify the port the srver is listening to
server.listen(5001)