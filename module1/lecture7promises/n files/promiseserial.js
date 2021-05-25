let fs = require("fs")
let files=["../f1.txt","../f2.txt","../f3.txt"];
 function serial(i){
   let fnkadata=fs.promises.readFile(files[i],"utf-8");
   fnkadata.then(function(data){
       console.log(data);
       serial(i+1)
   })
}
serial (0)
