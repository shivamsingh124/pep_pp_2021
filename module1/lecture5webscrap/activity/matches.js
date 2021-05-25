//let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request=require("request");
const fs = require("fs");
const cheerio=require("cheerio");
function getmatchdetail(matchLink){
request (matchLink,function  (error,response,data){
    //fs.writeFileSync("./match1.html",data);
    processdata(data);
})
}

function processdata(data){
let myDocument=cheerio.load(data);
let bothbattingtable=myDocument(".card.content-block.match-scorecard-table .Collapsible");
//console.log(bothbattingtable);
let highestsixes;

for(let i=0;i<bothbattingtable.length;i++){
    
    // console.log(highestsixes);
    let oneTable=myDocument(bothbattingtable[i]);
    let teamname=oneTable.find("h5").text();
    
    teamname=teamname.split("INNINGS")[0].trim();
    //console.log(teamname)

    let alltablerows=myDocument(oneTable).find(".table.batsman tbody tr");
    
    for(let j=0;j<myDocument(alltablerows).length-1;j++){
        let alltds=myDocument(alltablerows[j]).find("td");
       
        if(alltds.length>1){
        let batsmanName=myDocument(alltds[0]).text();
        let runs=myDocument(alltds[2]).text();
        let balls=myDocument(alltds[3]).text();
        let fours=myDocument(alltds[5]).text();
        let sixes=myDocument(alltds[6]).text();
        let strikerate=myDocument(alltds[7]).text();
        //console.log(teamname +" " +batsmanName+" "+ runs+" "+balls);
        processdetail(teamname,batsmanName,runs,balls,fours,sixes,strikerate);
        }}
        //console.log("########################");
    }
}
function checkteamfolder(teamname){
    let teamfolder="./IPL/"+teamname;
   // let teamfolder = `./IPL/${teamname}`;
    return fs.existsSync(teamfolder);
}
function checkbatsmanfolder(teamname,batsmanName){
    let batsmanfilepath="./IPL/"+teamname+"/"+batsmanName+".json";
    // let batsmanfilepath = `./IPL/${teamname}/${batsmanName}.json`;
    return fs.existsSync(batsmanfilepath);
}
function updatebatsman(teamname,batsmanName,runs,balls,fours,sixes,strikerate){
    let batsmanfilepath="./IPL/"+ teamname+"/"+batsmanName+".json";
    // let batsmanfilepath = `./IPL/${teamname}/${batsmanName}.json`;
    let batsmanFile=JSON.parse(fs.readFileSync(batsmanfilepath));
    let inning={
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes,
        Strikerate:strikerate
    }
    batsmanFile.push(inning);
    fs.writeFileSync(batsmanfilepath,JSON.stringify(batsmanFile));
}
function createbatsmanfolder(teamname,batsmanName,runs,balls,fours,sixes,strikerate){
    let batsmanFilePath="./IPL/"+teamname+"/"+batsmanName+".json";
    // let batsmanFilePath = `./IPL/${teamname}/${batsmanName}.json`;
    let batsmanFile=[];
    let inning={
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes,
        Strikerate:strikerate
    }
    batsmanFile.push(inning);
    fs.writeFileSync(batsmanFilePath,JSON.stringify(batsmanFile));
}
function createteamfolder(teamname){
    let teamfolder="./IPL/"+teamname;
    fs.mkdirSync(teamfolder)
}


function processdetail(teamname,batsmanName,runs,balls,fours,sixes,strikerate){
   let isteamfolder=checkteamfolder(teamname);
   if(isteamfolder) {
       let isbatsman=checkbatsmanfolder(teamname,batsmanName);
        if(isbatsman){
            updatebatsman(teamname,batsmanName,runs,balls,fours,sixes,strikerate);

        }
        else{
            createbatsmanfolder(teamname,batsmanName,runs,balls,fours,sixes,strikerate);

        }

   }
   else{
       createteamfolder(teamname);
       createbatsmanfolder(teamname,batsmanName,runs,balls,fours,sixes,strikerate);

   }
}





















module.exports = getmatchdetail;

// console.log(highestsixes);
//console.log(highestwickettaker);
