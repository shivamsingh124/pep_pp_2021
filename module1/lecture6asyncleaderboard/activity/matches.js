//let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request=require("request");
var json2xls = require("json2xls");
const fs = require("fs");
const cheerio=require("cheerio");
let leaderboard=[];
let count=0;
function getmatchdetail(matchLink){
    count++;
    //console.log("h");
request (matchLink,function  (error,response,data){
    count--;
    //fs.writeFileSync("./match1.html",data);
    processdata(data);
    if(count == 0){
        var xls = json2xls(leaderboard);
       fs.writeFileSync("./data.xlsx", xls, "binary");
    //    console.table(leaderboard);

    //    module.exports= leaderboard;
    //    console.log(leaderboard);
        }
})
}
function processdata(data){
let myDocument=cheerio.load(data);
let bothbattingtable=myDocument(".card.content-block.match-scorecard-table .Collapsible");
// console.log(bothbattingtable);
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
        // console.log(teamname +" " +batsmanName+" "+ runs+" "+balls);
       processdetail(teamname,batsmanName,runs,balls,fours,sixes);
        }}
        //console.log("########################");
    }
}
function processdetail(teamname,batsmanName,runs,balls,fours,sixes){
    runs=Number(runs);
    balls=Number(balls);
    fours=Number(fours);
    sixes=Number(sixes);
   
    for(let i=0;i<leaderboard.length;i++){
        let object1=leaderboard[i];
        if(object1.Team==teamname&&object1.BatsmanName==batsmanName){
            object1.Runs+=runs;
            object1.Balls+=balls;
            object1.Fours+=fours;
            object1.Sixes+=sixes;
            return;
        }
    }
    let batsmanobj={
        Team:teamname,
        BatsmanName:batsmanName,
        Balls:balls,
        Runs:runs,
        Sixes:sixes,
        Fours:fours

    }
    leaderboard.push(batsmanobj);


}
module.exports.getmatchdetail= getmatchdetail;



// console.log(highestsixes);
//console.log(highestwickettaker);
