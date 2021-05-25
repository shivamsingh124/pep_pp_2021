const puppeteer=require("puppeteer");
const id = "shivamsingh12042018@gmail.com";
const pw="1204@PRIvam";
let tab;

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
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
})
.then(function(){
   return tab.waitForSelector("#base-card-1-link",{visible:true}) 
})
.then(function(){
    return tab.click("#base-card-1-link");
})
.then(function(){
    return tab.waitForSelector("#base-card-7-link",{visible:true}) 
 })
 .then(function(){
     return tab.click("#base-card-7-link");
 })
 .then(function(){
    return tab.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled",{visible:true}) 
 })
 .then(function(){
     return tab.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
 })

.then(function(){
    console.log("logged in!");
})
