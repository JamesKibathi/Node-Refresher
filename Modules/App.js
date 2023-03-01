// commonJS, every file is a module(by default)
// Modules - encapsulated code (only share minimum)

const names=require("./names")
const sayHi=require("./utils")
const data = require("./alternative-export")
require("./function")

sayHi("James")
sayHi(names.Moh)
sayHi(names.babe)

console.log(data)