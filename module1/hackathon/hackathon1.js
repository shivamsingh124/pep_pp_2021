const puppeteer=require("puppeteer");
let usernames = require("./usernames");
const id = "@SHIVAMS79032542";
const pw="trijal123";
let tab;
let browserOpenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
});
browserOpenPromise
.then(function(browser){
    return browser.pages();
})
.then(function(pages){
    tab=pages[0];
    return tab.goto("https://twitter.com/explore");
})
.then (function(){
    return tab.waitForTimeout(5000)
})
.then(function(){
    return waitandclick(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0",{visible:true})      // ip kit              //login
 })
 .then(function(){
     return waitandclick(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0",{visible:true})      // ip kit           //login
  })
  
 .then(function(){
     return tab.type('.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[username_or_email]"]',id);
 })
 .then(function(){
     return tab.type('.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[password]"]',pw);
 })
 
 .then(function(){
     return tab.click('.css-901oao.r-1awozwy.r-jwli3a.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-b88u0q.r-1777fci.r-rjixqe.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0',{visible:true})  // module             //submit
  })
  .then( function(){
     return search(usernames[0].uidd);  
  })
  .then(function(){
    console.log("message done to "+ usernames[0].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[0].uidd)
})  
.then( function(){
     return search(usernames[1].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[1].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[1].uidd)
})
.then(function(){
    return waitandclick(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0",{visible:true})      // ip kit              //login
 })
 .then(function(){
     return waitandclick(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0",{visible:true})      // ip kit           //login
  })
  
 .then(function(){
     return tab.type('.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[username_or_email]"]',id);
 })
 .then(function(){
     return tab.type('.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[password]"]',pw);
 })
 
 .then(function(){
     return tab.click('.css-901oao.r-1awozwy.r-jwli3a.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-b88u0q.r-1777fci.r-rjixqe.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0',{visible:true})  // module             //submit
  })
.then( function(){
     return search(usernames[2].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[2].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[2].uidd)
})

.then( function(){
     return search(usernames[3].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[3].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[3].uidd)
})

.then( function(){
     return search(usernames[4].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[4].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[4].uidd)
})

.then( function(){
     return search(usernames[5].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[5].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[5].uidd)
})

.then( function(){
     return search(usernames[6].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[6].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[6].uidd)
})

.then( function(){
    return search(usernames[7].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[7].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[7].uidd)
})
.then( function(){
    return search(usernames[8].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[8].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[8].uidd)
})
.then( function(){
    return search(usernames[9].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[9].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[9].uidd)
})
.then( function(){
    return search(usernames[10].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[10].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[10].uidd)
})
.then( function(){
    return search(usernames[11].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[11].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[11].uidd)
})
.then( function(){
    return search(usernames[12].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[12].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[12].uidd)
})
.then( function(){
    return search(usernames[13].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[13].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[13].uidd)
})
.then( function(){
    return search(usernames[14].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[14].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[14].uidd)
})
.then( function(){
    return search(usernames[15].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[15].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[15].uidd)
})
.then( function(){
    return search(usernames[16].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[16].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[16].uidd)
})
.then( function(){
    return search(usernames[17].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[17].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[17].uidd)
})
.then( function(){
    return search(usernames[18].uidd); 
  })
  .then(function(){
    console.log("message done to "+ usernames[18].uidd)
})
.catch(function(){
    console.log("message not delivered to "+ usernames[18].uidd)
})

function waitandclick(selector){
    return new Promise (function(scb,fcb){
        let waitpromise = tab.waitForSelector(selector,{visible:true,timeout:5000});
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




   function search(uid){
    return new Promise (function(scb,fcb){
        let waitpromise = tab.waitForTimeout(5000);
        waitpromise.then(function(){
            
            return tab.type(".r-30o5oe.r-1niwhzg.r-17gur6a.r-1yadl64.r-deolkf.r-homxoj.r-poiln3.r-7cikom.r-1ny4l3l.r-xyw6el.r-641cr4.r-1dz5y72.r-fdjqy7.r-13qz1uu",uid);     //search
        })
            .then (function(){
                return tab.waitForTimeout(2000)
            })
            
            .then(function(){
                return tab.click('li[role="listitem"]');                  // list click
            })
            
            // .then (function(){
            //     return tab.waitForTimeout(5000)
            // })
            
             .then(function(){
                return waitandclick('div[aria-label="Message"]',{visible:true})      // ip kit               //message
             })
             
             .then(function(){
                return waitandclick('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr',{visible:true})      // ip kit            //input box
             })
             .then(function(){
                return tab.type('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr','Automation');                //messgage
            })
            .then(function(){
                return tab.click('path[d="M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z"]',{visible:true})      // submit
             })
             .then(function(){
                // tab=pages[0];
                return tab.goto("https://twitter.com/explore");
            
            })
             
        .then(function(){
            
            scb();
        })
        .catch(function(){
            fcb();
        })
    
   })
}