const fs = require ("fs");
function apnapromises(filepath){
   return  new promise ( function (scb,fcb){
    fs.readFile(filepath,function(error,data){
        if(error){
            fcb(error);
        }
        else{
            scb(data);
        }
    })
   });
}

let pendingpromise= apnapromises("./f1.txt","utf8");    
console.log(pendingpromise)

pendingpromise.then( function (data)
{
    
    console.log(data + "")
    
});
pendingpromise.catch( function (err)
{
    
    console.log(err )
});