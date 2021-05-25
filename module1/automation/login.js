const puppeteer = require("puppeteer");
// it is a promisified function
// by default headless is true make it false 
let browseroprnpromise=puppeteer.launch({headless : false});

browseroprnpromise.then(function(browser){
    console.log("browser is opened")
    return browser.pages()
})
.then(function(pages){
    let tab= pages[0];
    return tab.goto("https://www.google.com"); 
})
.then(function(){
    console.log("google is opened");
})
