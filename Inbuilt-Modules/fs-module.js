
// This is the sync fs
const{readFileSync,writeFileSync}=require("fs")

const first=readFileSync("../Basics/first.txt","utf-8")
const second=readFileSync("../Basics/second.txt","utf-8")

console.log(first,second)

writeFileSync("../Basics/result-sync.txt",`Here is the result:${first},${second}`)