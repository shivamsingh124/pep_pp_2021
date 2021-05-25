let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
const request=require("request");
const fs = require("fs");
const cheerio=require("cheerio");
request (matchLink,cb);
function   cb(error,response,data){
    //fs.writeFileSync("./match.html",data);
    gethighestwicket(data);
}
function gethighestwicket(data){
let myDocument=cheerio.load(data);
let bothbowlingtable=myDocument(".bowler.table");
fs.writeFileSync("./bowlertable.html",myDocument(bothbowlingtable)+"");
let highestwickettaker;
let highestwickettaken;
let economy;
for(let i=0;i<bothbowlingtable.length;i++){
    let bowlingTable=myDocument(bothbowlingtable[i]);
    let alltablerows=myDocument(bowlingTable).find("tbody tr");
    for(let j=0;j<myDocument(alltablerows).length;j++){
        let alltds=myDocument(alltablerows[j]).find("td");
        if(i==0 && j==0){
            highestwickettaker=myDocument(alltds[0]).find("a").text();
            highestwickettaken=myDocument(alltds[4]).text();
            economy=myDocument(alltds[5]).text();
        }
        else{
            if(myDocument(alltds[4]).text()>highestwickettaken){
                highestwickettaker=myDocument(alltds[0]).find("a").text();
                highestwickettaken=myDocument(alltds[4]).text();
                economy=myDocument(alltds[5]).text(); 
            }
        }
    }
}
console.log(highestwickettaken);
console.log(highestwickettaker);
}
