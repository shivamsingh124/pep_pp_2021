let fs = require ("fs");

 let extensionsMapping=require ("./util.js");
//console.log(extensionsMapping);
let testfolderpath = "./Downloads";
let allfiles = fs.readdirSync(testfolderpath);
for ( let i=0;i<allfiles.length;i++){
    sortfiles(allfiles[i]);
}
function getextension(file){
let flieex=file.split(".");
return flieex[1];
//file=file.split(".");
//return file[1];
}
function checkextensionfolder(extension){
let extensionfoldername;
  for(let key in extensionsMapping) {
      let extensions = extensionsMapping[key];
      for(let i=0;i<extensions.length;i++)
      {if(extensions[i]==extension){
          extensionfoldername=key;
           break;
        }
        //extensions.includes(extension);
      }
 } 
let foldertobechecked= testfolderpath+"/"+extensionfoldername;
let check =fs.existsSync(foldertobechecked);
 if(!check){
     fs.mkdirSync(foldertobechecked);
 }
 return foldertobechecked;
}


function movefile(file,isfolder){
    //copy to destination
    let sourcefile=testfolderpath+"/"+file;
    let destinationfile=isfolder+"/"+file;
    fs.copyFileSync(sourcefile,destinationfile);



    //delete from source
    fs.unlinkSync(sourcefile);
}
function sortfiles(file){
    let extension = getextension(file);
    //console.log(extension);
    let isfolder=checkextensionfolder(extension);
     movefile(file,isfolder);
  
}
