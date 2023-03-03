const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.status(404).send("<h1>Home page</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>About page</h1>")
})

app.all("*",(req,res)=>{
    res.send("<h1>Resource not found</h1>")
})

app.listen(5000, () => {
    console.log("App listening on port 5000")
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use - middleware
// app.listen