const puppeteer=require("puppeteer");
let id = "gg";
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
    return tab.goto("https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en");

})
// .then ( function(){
//     return tab.wait(".emailbox-input.opentip",{visible:true, timeout:5000});
// })
.then(function(){

    return tab.$('.wmzpFf.yETrXb.Ir3o3e');   // get all a tag which contain this selector in form of array
})
.then(function(arr){
    // console.log(arr)
    id= tab.evaluate( function(eleme){ return eleme.textContent; } ,arr);
    return id;
})
.then(function(data){
    console.log(data);
})