const puppeteer=require("puppeteer");
const id = "";
const pw="1234567";
let tab;
let browserOpenPromise=puppeteer.launch({
    headless:false
    
});


browserOpenPromise
.then(function(browser){
    console.log("browser is opened !")
    return browser.pages();
})
.then(function(pages){
    tab=pages[0];
    return tab.goto("https://temp-mail.org/en/");

})
.then(function(){
    id= tab.emailbox-input.opentip;
    console.log(id);
})