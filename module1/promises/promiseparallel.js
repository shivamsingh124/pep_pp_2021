const fs = require("fs")
let f1kapromise=fs.promises.readFile("./f1.txt","utf-8")
f1kapromise.then(function (data){
    console.log (data)
});

let f2kapromise=fs.promises.readFile("./f2.txt","utf-8")
f2kapromise.then(function (data){
    console.log (data)
});

let f3kapromise=fs.promises.readFile("./f3.txt","utf-8")
f3kapromise.then(function (data){
    console.log (data)
});

