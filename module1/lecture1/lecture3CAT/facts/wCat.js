const fs = require("fs");
let f1kadata = fs.readFileSync("./f1.txt","utf8");
let f2kadata = fs.readFileSync("./f2.txt","utf8");
let bothoutput = f1kadata +"/n"+ f2kadata;


function Applysflag(f1kadata){

//     console.log("in f1");
//     console.log(f1kadata );
//     console.log(f1kadata.split(""));
//     bye i am f2
// [
//   'h',  'e',  'y',  ' ',  'i',  ' ',
//   'a',  'm',  ' ',  'f',  '1',  '\r',
//   '\n', '\r', '\n', '\r', '\n', '\r',
//   '\n', '\r', '\n', '\r', '\n', 'b',
//   'y',  'e',  ' ',  'i',  ' ',  'a',
//   'm',  ' ',  'f',  '2'
// ]
// \r is for ending of line and \n to start new line 

let splitdata= f1kadata.split("\r\n");
//console.log(splitdata);
let count =0;
let sfalgans=[];
for(let i=0;i<splitdata.length;i++){
if(splitdata[i]!=""){
    sfalgans.push(splitdata[i]);
    if(i<splitdata.length-2)
    count=0;
    
}
else if (count ==0 && splitdata[i]==""){
    sfalgans.push(splitdata[i]);
    count ++;
    
}
}
 //console.log(sfalgans);
let sflag=sfalgans.join("\r\n");
console.log(sflag);
//return sflag;

}

Applysflag(f1kadata);

function applybflag(f1kadata)
{
    let splitdata= f1kadata.split("\r\n");
    let count =1;
let bfalgans=[];
for(let i=0;i<splitdata.length;i++){
if(splitdata[i]!=""){
    //splitdata[i]=count+"."+splitdata[i];
    splitdata[i]=`${count}.${splitdata[i]}`;
    count++;    
}
}
bfalgans=splitdata.join("\r\n");
//console.log(bfalgans);
return bfalgans;




}applybflag(f1kadata);




function applynflag(f1kadata)
{
    let splitdata= f1kadata.split("\r\n");
    let count =1;
let cfalgans=[];
for(let i=0;i<splitdata.length;i++){
{
    //splitdata[i]=count+"."+splitdata[i];
    splitdata[i]=`${count}.${splitdata[i]}`;
    count++;    
}
}
nfalgans=splitdata.join("\r\n");
//console.log(nfalgans);
return nfalgans;




}applynflag(f1kadata);