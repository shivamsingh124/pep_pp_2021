 let fs = require("fs")
 let files=["../f1.txt","../f2.txt","../f3.txt"];
for ( let i=0;i<files.length;i++){
    let fnkadata=fs.promises.readFile(files[i],"utf-8");
    fnkadata.then(function (data){
        console.log(data)+" ";
    });
}