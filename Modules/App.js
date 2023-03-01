// commonJS, every file is a module(by default)
// Modules - encapsulated code (only share minimum)

const names=require("./names")
const sayHi=require("./utils")
console.log(names)

sayHi("James")
sayHi(names.Moh)
sayHi(names.babe)