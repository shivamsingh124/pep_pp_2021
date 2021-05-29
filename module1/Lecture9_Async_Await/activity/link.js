// const puppeteer = require("puppeteer");
// const id = "notax89095@frnla.com";
// const pw = "123456789";

// (async function(){
//     let browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: null,
//         args: ["--start-maximized"],
//       });
//     let pages = await browser.pages();
//     let tab = pages[0];
//     await tab.goto("https://www.hackerrank.com/auth/login");
//     await tab.type("#input-1", id);
//     await tab.type("#input-2", pw);
//     await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
//     console.log("Logged in !!");
//     await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]',{visible:true});
//     await tab.click('div[data-analytics="NavBarProfileDropDown"]');
//     await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]',{visible:true});
//     await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
//     await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav .active .backbone',{visible:true});
//     await tab.click('.nav-tabs.nav.admin-tabbed-nav .active .backbone');
// })();






























const puppeteer = require("puppeteer");
const id = "notax89095@frnla.com";
const pw = "123456789";
let challenges = require("./challenges");

(async function (){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        // slowMo:200
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});//dropdown
    await tab.waitForTimeout(2000);
    let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await element.click();
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});//admin tab
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible:true});    //
    let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');          //manage challenge
    let manageChallengeLi = bothLis[1];
    await manageChallengeLi.click();
    await tab.waitForSelector('.btn.btn-green.backbone.pull-right' , {visible:true});  
    let createChallengeElement = await tab.$('.btn.btn-green.backbone.pull-right');
    let createChallengeLink = await tab.evaluate( function(elem){ return elem.getAttribute("href"); }   ,  createChallengeElement)
    createChallengeLink = "https://www.hackerrank.com"+createChallengeLink;
    for(let i=0 ; i<challenges.length ; i++){
        await addChallenges(browser , createChallengeLink , challenges[i]);
    }
    })();


    async function addChallenges(browser,createChallengeLink,challenge){
    let newtab = await browser.newPage();
    await newtab.goto(createChallengeLink);
    
    // {
    //     "Challenge Name": "Pep_Java_1GettingStarted_1IsPrime",
    //     "Description": "Question 1",
    //     "Problem Statement": "Take as input a number n. Determine whether it is prime or not. If it is prime, print 'Prime' otherwise print 'Not Prime.",
    //     "Input Format": "Integer",
    //     "Constraints": "n <= 10 ^ 9",
    //     "Output Format": "String",
    //     "Tags": "Basics",
    //   }
    await newtab.waitForTimeout(2000);
    let challengename=challenge["Challenge Name"];
    await newtab.waitForSelector('#name' , {visible:true});
    await newtab.type('#name',challengename)
    let Description=challenge["Description"];
    await newtab.type('#preview',Description)
    let ProblemStatement=challenge["Problem Statement"];
    await newtab.type('#problem_statement-container .CodeMirror.cm-s-default.CodeMirror-wrap textarea',ProblemStatement)
    let InputFormat=challenge["Input Format"];
    await newtab.type('#input_format-container .CodeMirror.cm-s-default.CodeMirror-wrap textarea',InputFormat)
    let Constraints=challenge["Constraints"];
    await newtab.type('#constraints-container .CodeMirror.cm-s-default.CodeMirror-wrap textarea',Constraints)
    let OutputFormat=challenge["Output Format"];
    await newtab.type('#output_format-container .CodeMirror.cm-s-default.CodeMirror-wrap textarea',OutputFormat)
    let Tags=challenge["Tags"];
    await newtab.type('#tags_tag',Tags)
    await newtab.keyboard.press("Enter");
    await newtab.click('.save-challenge.btn.btn-green')
    await newtab.close();
    await newtab.waitForTimeout(3000);

    }