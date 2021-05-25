const request=require("request");
const cheerio=require("cheerio");
//const { getmatchdetail } = require("./matches");
const getmatchdetail = require("./matches");

function getallmatches(allmatches){
    request(allmatches,function(err,res,data){
        processData(data);
    })

}
function processData(data){
    let myDocument=cheerio.load(data);
    let allatags=myDocument('a[data-hover="Scorecard"]');
    //console.log(allatags);
    for(let i=0;i<allatags.length;i++){
        let matchlink="https://www.espncricinfo.com"+myDocument(allatags[i]).attr("href");
        //console.log(matchlink);
        getmatchdetail(matchlink);
        
    }
}

module.exports=getallmatches;