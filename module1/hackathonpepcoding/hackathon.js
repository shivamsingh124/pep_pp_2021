const puppeteer = require("puppeteer");
let usernames = require("./donor");
let usernamesneed = require("./need");
const id = "@Shivam26694085";
const pw = "pepcoding";
let message = [];
let tweet = [];
for (let i=0;i<usernames.length/4;i++){
    message.push(usernames[i].user_id)
}
for (let i=0;i<usernames.length/7-3;i++){
    tweet.push(usernamesneed[i].user_id)
}
let tab;
(async function () {
    let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    });
    let pages = await browser.pages();
    tab = pages[0];
    await tab.goto("https://twitter.com/explore");
    await tab.waitForTimeout(3000)
    try{
    await waitandclick(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0", { visible: true })               //login
    await waitandclick(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0", { visible: true })    
    await tab.type('.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[username_or_email]"]', id);
    await tab.type('.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[password]"]', pw);
    await tab.click('.css-901oao.r-1awozwy.r-jwli3a.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-b88u0q.r-1777fci.r-rjixqe.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0', { visible: true })    
    }
    catch{
        console.log("error")
    }   

    await waitandclick('a[href="/compose/tweet"] .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0', { visible: true })
    await tab.waitForTimeout(2000)
    await tab.type('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr', "NOTE : These people are willing to donate covid equipment: " + tweet) 
    await tab.waitForTimeout(15000)
    await waitandclick('div[data-testid="tweetButton"]', { visible: true }) 
    await waitandclick('div[data-testid="tweetButton"]', { visible: true }) 
    await tab.waitForTimeout(3000)
    for (let i = 0; i < usernamesneed.length; i++) {
                                                                                                // backspace 
        try{
        await tab.waitForTimeout(2000) 
        await search(usernamesneed[i].user_id)
        await console.log("message delivered to"+ usernamesneed[i].user_id) 
        }
        catch{
        await console.log(" message not delivered to "+usernamesneed[i].user_id);
        }
    }
    await console.log("ALL MESSAGE DONE  ")
})();

async function waitandclick(selector) {

    await new Promise(async function (scb, fcb) {
        try {
        await tab.waitForSelector(selector, { visible: true, timeout: 5000 });
            await tab.click(selector);
            await scb();
        }
        catch {
            await fcb();
        }
    })
}

async function search(uid) {
    await new Promise(async function (scb, fcb) {
        await tab.waitForTimeout(2000);
        try {
            await tab.type(".r-30o5oe.r-1niwhzg.r-17gur6a.r-1yadl64.r-deolkf.r-homxoj.r-poiln3.r-7cikom.r-1ny4l3l.r-xyw6el.r-641cr4.r-1dz5y72.r-fdjqy7.r-13qz1uu", uid);     //search
            await tab.waitForTimeout(2000)
            await tab.click('li[role="listitem"]');                  // list click
            await tab.waitForTimeout(2000)
            await waitandclick('div[aria-label="Message"]', { visible: true })     
            await tab.waitForTimeout(2000)               //message
            await waitandclick('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr', { visible: true })            //input box
            await tab.type('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr', "These people are willing to donate covid equipments : "+message);         
            await tab.waitForTimeout(10000)     //messgage
            await tab.click('path[d="M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z"]', { visible: true }) 
            await tab.click('path[d="M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z"]', { visible: true })      // submit
            await waitandclick('a[href="/explore"] .css-1dbjc4n.r-1awozwy.r-sdzlij.r-18u37iz.r-1777fci.r-dnmrzs.r-xyw6el.r-o7ynqc.r-6416eg',{visible:true}) 
            await scb();
        }
        catch {
            await fcb();
            
        }

    })
}

