const path=require("path")

// console.log(path.sep) 

const filePath=path.join("/Basic","subfolder","text.txt")

// console.log(filePath)

const base=path.basename(filePath)
// console.log(base)

const absolute=path.resolve(__dirname,"Basic","subfolder","text.txt")
console.log(absolute)