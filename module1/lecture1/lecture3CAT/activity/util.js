let fs = require( "fs");

 //let filesdata=getfilesdata(file);
function getfilesdata(file){
     
     let filesdata = "";
     for ( let i=0 ; i < file.length;i++){
         if(!fs.existsSync(file[i])){
             console.log("one or more file doesnot exist");
             return;
         }
         else {
             let n=file[i];
             if (i!=file.length-1)
             filesdata+= fs.readFileSync(file[i])+ "\r"+"\n";
             else 
             filesdata+= fs.readFileSync(file[i]);
         }
 
     
     }
    //console.log ( filesdata);
     return filesdata;
 }
 
function Applysflag(filesdata){
    //console.log(filesdata);
   
    let splitdata= filesdata.split("\r\n");         
 
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
    //console.log(sflag);
    return sflag;
    
    }







    function applybflag(f1kadata)
{
    
    let splitdata= f1kadata.split("\r\n");
    let count =1;
  
let bfalgans=[];
for(let i=0;i<splitdata.length;i++){
if(splitdata[i]!=""){
    splitdata[i]=count+"."+splitdata[i];
    //splitdata[i]=`${count}.${splitdata[i]}`;
    count++;    
}
}
bfalgans=splitdata.join("\r\n");
//console.log(bfalgans);
return bfalgans;




}
    module.exports.getfilesdata = getfilesdata;
    module.exports.Applysflag=Applysflag ;
    module.exports.applybflag=applybflag;