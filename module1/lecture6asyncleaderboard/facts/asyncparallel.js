const fs=require("fs");
console.log("start");
fs.readFile("./f1.txt",function (err,data){
    console.log(data+"");

})
fs.readFile("./f2.txt",cb)
function cb (err,data){
    console.log(data+"");

}

////orr


fs.readFile("./f3.txt",function (err,data){
    console.log(data+"");

})

console.log("end");