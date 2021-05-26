const puppeteer=require("puppeteer");
let id = "";
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
.then ( function(){
    return tab.wait(".input-warp",{visible:true});
})
.then(function(){
    return tab.$('.input-warp');   // get all a tag which contain this selector in form of array
})
.then(function(arr){
    // console.log(elem);
    id= tab.evaluate( function(eleme){ eleme.value; } ,arr);
    return id;
})
.then(function(){
    console.log(id);
})