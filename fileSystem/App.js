const fs=require("fs")
fs.writeFileSync("notes.txt","Welcome to the file system")
const add=require("./index")

const sum=add(5,10)
console.log(sum)