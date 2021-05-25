let FileLs=["./f1.txt","./f2.txt","..........","./fn.txt"];
const fs=require("fs");
console.log("start");
let i=0;
rec(FileLs,i);
function rec(FileLs,i){
    if(i==FileLs.length){
        return;
    }

fs.readFile(FileLs[i],function (err,data){
    console.log(data+"");
    rec(FileLs,i+1);

})
}


console.log("end");