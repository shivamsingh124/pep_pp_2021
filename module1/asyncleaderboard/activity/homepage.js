let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request=require("request");
// const fs = require("fs");
const cheerio=require("cheerio");
const getallmatches=require("./allmatches");

request (matchLink,cb);
function   cb(error,response,data){
    //fs.writeFileSync("./match.html",data);
    processData(data);
    //console.log(data);
}
function processData(data){
let myDocument=cheerio.load(data);
let atag=myDocument(".widget-items.cta-link a");
// let atag=myDocument('a[data-hover="View All Results"]');
let allmatches="https://www.espncricinfo.com"+atag["0"].attribs.href;
// atag.attr("href");
getallmatches(allmatches);
}