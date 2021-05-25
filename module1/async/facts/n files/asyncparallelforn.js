let FileLs=["./f1.txt","./f2.txt","..........","./fn.txt"];
const fs= require("fs");
for(let i=0;i<FileLs.length;i++){
    fs.readFile(FileLs[i],function(err,data){
        console.log(data);
    })
}