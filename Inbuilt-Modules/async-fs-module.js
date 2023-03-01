const {readFile,writeFile}=require('fs')

readFile("../Basics/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    //console.log(result)
})

writeFile("../Basics/res-async.txt",
`Here is the async result:`,
(err,result)=>{
if(err){
    console.log(err)
    return
}
console.log(result)
})