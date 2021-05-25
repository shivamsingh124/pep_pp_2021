// const fs = require ( "fs")
// let fskadata = fs.promises.readFile("./f1.txt")
// fskadata.then(function(data){
//     console.log(data+"")
// })
// .then(function(){
//     console.log("i am after first scb!!")
// })
const fs = require ( "fs")
let f1kapromise= fs.promises.readFile("./f1.txt")
f1kapromise.then(function(f1kadata){
    console.log(f1kadata+"")
    let f2kapromise = fs.promises.readFile("./f2.txt")
    return f2kapromise
})
.then(function(f2kadata){
    console.log(f2kadata+"")
    let f3kapromise = fs.promises.readFile("./f3.txt")
    return f3kapromise
})
.then(function(f3kadata){
    console.log(f3kadata+"")
})
