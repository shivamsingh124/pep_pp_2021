const puppeteer=require("puppeteer");
let fs = require ("fs")
const id = "sadena1729@rphinfo.com";
const pw="123456789";
let tab;
let idx=0;
let gcode="";
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
    let onequestionpromise= solvequestion(allpromisecombined[0])
for ( let i=1 ;i < allpromisecombined.length;i++){
    onequestionpromise= onequestionpromise.then(function(data){
    // console.log(data);
    let nextquestionpromise=solvequestion(allpromisecombined[i]);
    return nextquestionpromise;
  })
  
}
 return onequestionpromise;                                       ///////////////////////////////doubt doubt doubt doubt doubt 
})

.then(function(){
    console.log("All question solved");

})
 .catch(function(err){
     console.log(err);
 })




 function getcode(){
     return new Promise(function(scb,fcb){
        
            let waitpromise= tab.waitForSelector('.editorial-code-box',{visible:true})
         waitpromise.then(function(){
             return tab.$$(".hackdown-content h3");
         })
         .then(function(allcodeelement){
            //  console.log(allcodeelement)
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
            //  console.log(idx)
             let allcode= tab.$$(".hackdown-content .highlight")
             // console.log(allcode)
             return allcode;
         })
         .then(function(allcodediv){
             let codediv=allcodediv[idx]
         return tab.evaluate(function(elem){
             return elem.textContent;
         },codediv)
         })
         .then(function(data){
            gcode=data;
            console.log(gcode)
            scb();
         })
         .catch(function(error){
         
             console.log(error)
             fcb();
         })
     })
 }
     
function pastecode(){
    return new Promise(function(scb,fcb){
       let waitpromise=waitandclick('.checkbox-input')
       waitpromise.then(function(){
           return tab.waitForTimeout(2000)
           
       })
       .then(function(){
        return tab.type('#input-1',gcode)
       })
       .then(function(){
           return tab.keyboard.down("Control")
       })
       .then(function(){
           return tab.keyboard.press("A");
       })
       .then(function(){
        return tab.keyboard.press("X"); 
       })
       .then(function(){
        return tab.click(".hr-monaco-editor-parent"); 
       })
       .then(function(){
        return tab.keyboard.press("A"); 
       })
       .then(function(){
        return tab.keyboard.press("V"); 
       })
       .then(function(){
        return tab.keyboard.up("Control"); 
       })
       .then(function(){
        scb();
       })

    })  
}



function handlelockbutton(){
    return new Promise ( function ( scb,fcb){
        let waitforlockbutton=tab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled" , {visible:true , timeout:5000});
        waitforlockbutton.then(function(){
            return tab.$(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");

        })
        .then(function(elem){
            return tab.evaluate(function(ele){
                return ele.click();
            },elem)
        })
        .then(function(){
            console.log("LockButton found")
            scb();
        })
        .catch(function(){
            console.log("Lockbutton not found");
            scb();
        })
    })
}












function solvequestion(oneques){
    return new Promise ( function(scb,fcb){
        let gotopromise = tab.goto("https://hackerrank.com"+oneques)
        gotopromise.then(function(){
             return waitandclick("div[data-attr2='Editorial']"); // editoriqal 
        })
        .then(function(){
           return  handlelockbutton();
        })
        .then(function(){
            console.log(gcode)
            return getcode();
        })
        .then(function(){
        console.log(gcode);
        return tab.click('div[data-attr2="Problem"]');
        })
        .then(function(){
           return pastecode();
        })
        .then(function(){
            return tab.waitForTimeout(200);
        })
        .then(function(){
            return tab.click('.ui-btn.ui-btn-normal.ui-btn-primary');
        })
        .then(function(){
            scb();
        })
        .catch(function(err){
            console.log(err)
            fcb();
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