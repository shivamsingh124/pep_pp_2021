const fs = require("fs");
const cheerio =require("cheerio");
let htmlkadata=fs.readFileSync("./index.html","utf8");
//console.log(htmlkadata);
let myDocument = cheerio.load(htmlkadata);
let htmlkadata1=myDocument("h1").text();
//console.log(htmlkadata1);
let secondtag=myDocument("p")["1"];
console.log(myDocument(secondtag).text());