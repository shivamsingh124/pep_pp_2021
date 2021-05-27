// let fs = require("fs")
// let files=["../f1.txt","../f2.txt","../f3.txt"];
//  function serial(i){
//    if (i==3){
//      return 
//    }
//    let fnkadata=fs.promises.readFile(files[i],"utf-8");
//    fnkadata.then(function(data){
//        console.log(data);
//        serial(i+1)
//    })
//    fnkadata.catch(function(err){})
// }
// serial (0)

let fs = require ("fs")
let files=["../f1.txt","../f2.txt","../f3.txt"];
let f1kapendingpromise=fs.promises.readFile(files[0],"utf-8");
for ( let i=1 ;i < files.length;i++){
    f1kapendingpromise= f1kapendingpromise.then(function(data){
    console.log(data);
    let nextfilepromise=fs.promises.readFile(files[i],"utf-8");
    return nextfilepromise;
  })
  
}
f1kapendingpromise.then (function(data){
 console.log( data);
})
// 




