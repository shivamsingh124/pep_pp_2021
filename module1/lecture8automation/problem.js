const puppeteer=require("puppeteer");
const id = "notax89095@frnla.com";
const pw="123456789";
let tab;
let idx=0;
let browserOpenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
});
browserOpenPromise
.then(function(browser){
    console.log("browser is opened !")
    return browser.pages();
})
.then(function(pages){
    tab=pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login");

})
.then(function(){
    return tab.type("#input-1",id);
})
.then(function(){
    return tab.type("#input-2",pw);
})
.then(function(){
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"); // login
})

.then(function(){
   return waitandclick("#base-card-1-link",{visible:true})      // ip kit
})

.then(function(){
    return waitandclick('a[data-attr1="warmup"]',{visible:true})  // module
 })
 .then(function(){
    console.log("logged in!");
})
.then(function(){
    return tab.waitForSelector(".cta-container");    //question
})
.then(function(){
    return tab.$$(".js-track-click.challenge-list-item");   // get all a tag which contain this selector in form of array
})
.then(function(alldata){
    let allpendingpromise=[];
for ( let i=0 ; i < alldata.length;i++){
    let oneTag= alldata[i];
    let pendingpromise= tab.evaluate(function(element){
        return element.getAttribute("href");
    },oneTag)
    allpendingpromise.push(pendingpromise);
    
}
let allpromisecombined=Promise.all(allpendingpromise);
return allpromisecombined;
})
.then(function(allpromisecombined){
  return solvequestion(allpromisecombined[0])
})
.then(function(){

})
 .catch(function(err){
     console.log(err);
 })



function solvequestion(oneques){
    return new Promise ( function(scb,fcb){
        let gotopromise = tab.goto("https://hackerrank.com"+oneques)
        gotopromise.then(function(){
             return waitandclick("div[data-attr2='Editorial']"); // editoriqal 
        })
        .then(function(){
           return  tab.waitForSelector('div[data-attr2="Editorial"]',{visible:true})

        })
        .then(function(){
            return tab.$$(".hackdown-content h3");
        })
        .then(function(allcodeelement){
            let allcode=[];
            for(let i=0;i<allcodeelement.length;i++){
                let codename=tab.evaluate(function(elem){
                    return elem.textContent;
                },allcodeelement[i])
                allcode.push(codename);
            }
            let combinedpromise=Promise.all(allcode)
            // console.log(combinedpromise)
            return combinedpromise
        })
        .then(function(codename){
            // console.log(codename)
            for ( let i=0;i< codename.length;i++){
                if( codename[i]=="C++"){
                    idx=i;
                    break;
                }
            }
            console.log(idx)
            tab.waitForTimeout(2000)
            let allcode= tab.$$(".hackdown-content .highlight")
            // console.log(allcode)
            return allcode;
        })
        .then(function(allcodediv){
            let codediv=allcodediv[idx]
            console.log(allcodediv)
        return tab.evaluate(function(elem){
            return elem.textContent;
        },codediv)
        })
        .then(function(data){
            console.log(data)
        })
    })
}


function waitandclick(selector){
 return new Promise (function(scb,fcb){
     let waitpromise = tab.waitForSelector(selector,{visible:true});
     waitpromise.then(function(){
        return tab.click(selector);     
     })
     .then(function(){
         scb();
     })
     .catch(function(){
         fcb();
     })
 })
}























//saare link
// word file 
// type in inbox
//mail id evaluate 