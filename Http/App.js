const http=require("http")

const server=http.createServer((req,res)=>{
    // console.log(req)
    if(req.url==="/"){
        res.end("Welcome to our homepage")
    }
    else if(req.url==="/about"){
        res.end("This is the About page")
    }
 else{
    res.end(`
    <h1>Ooops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back to homepage</a>
    `)
 }
    
})
server.listen(5000)