let fs = require("fs");


const {getfilesdata , Applysflag} = require("./util");
const {applybflag} = require("./util");


let command = process.argv.slice(2);
const flag =[];
const file=[];
for (let i=0;i<command.length;i++){
    if(command[i].startsWith("-")){
        flag.push(command[i]);
    }
    else{
        file.push(command[i]);
    }
}
let filesdata = getfilesdata(file);

 if(flag.includes("-s")){
 let files= Applysflag(filesdata);
 
console.log(files);}
 
else if(flag.includes("-b")){
    let files= applybflag(filesdata);
    
   console.log(files);}
    
   





