let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
const request=require("request");
const fs = require("fs");
const cheerio=require("cheerio");
request (matchLink,cb);
function   cb(error,response,data){
    //fs.writeFileSync("./match1.html",data);
    gethighestwicket(data);
}
function gethighestwicket(data){
let myDocument=cheerio.load(data);
let bothbattingtable=myDocument(".batsman.table");
//console.log(bothbattingtable);
let highestsixes;
// let highestwickettaken;
// let economy;

for(let i=0;i<bothbattingtable.length;i++){
    // console.log(highestsixes);
    let battingTable=myDocument(bothbattingtable[i]);
    let alltablerows=myDocument(battingTable).find("tbody tr");
    
    for(let j=0;j<myDocument(alltablerows).length;j++){
        let alltds=myDocument(alltablerows[j]).find("td");
       
        if(alltds.length>1){
        if(i==0 && j==0){
            highestsixes=myDocument(alltds[6]).text();
            //console.log(highestsixes);
            // highestwickettaken=myDocument(alltds[4]).text();
            // economy=myDocument(alltds[5]).text();
        }
        else{
            if(myDocument(alltds[6]).text()>highestsixes){
                highestsixes=myDocument(alltds[6]).text();
                //console.log(highestsixes);
                // highestwickettaken=myDocument(alltds[4]).text();
                // economy=myDocument(alltds[5]).text(); 
            }
        }}
    }
}
// console.log(highestsixes);
//console.log(highestwickettaker);
}

