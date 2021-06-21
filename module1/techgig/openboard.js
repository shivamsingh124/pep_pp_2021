
const puppeteer = require("puppeteer");

async function login(){
    let browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' ,
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
      });
    let pages = await browser.pages();
    let tab = pages[0];
    
    await tab.goto ("https://www.techgig.com/codegladiators/dashboard");
    await tab.waitForTimeout(35000);
    // await tab.type( '.col-sm-9.col-xs-9 input[id="username"]',"shivamsingh12042018@gmail.com");
    // await tab.type( '.col-sm-9.col-xs-9 input[id="password"]',"1204@PRIvam");
    // await tab.click('#button_login');
    await tab.click( 'a[data-redirect_season="bnI2TmM0QnBBbVJJNnRaeklMVDgvQT09"]');
    await tab.waitForSelector('#modeSelect' , {visible:true});
    await tab.click("#modeSelect");
    // await tab.waitForTimeout(40000);
    // await tab.mouse.click(782 , 263, {button: 'left'})
    // await tab.waitForTimeout(50000);

    // await tab.waitForSelector('div[style="top:57px;height:19px;"]' , {visible:true});
    // await page.mouse.click(90.125 , 128, {button: 'left'})
    // await tab.click('div[style="top:57px;height:19px;"]');

    await tab.waitForTimeout(500);
    await tab.waitForSelector('div[style="top:0px;height:19px;"]' , {visible:true});
    await tab.click('div[style="top:0px;height:19px;"]');
    // await tab.waitForSelector('option[value="python3"]' , {visible:true});
    // await tab.click('option[value="python3"]');
    await tab.keyboard.down("Control");
    await tab.keyboard.down("A");
    await tab.keyboard.down("V");
    await tab.click( '.btn.button1.straight-editor-btn.codebtn_1.min120');
    await tab.waitForTimeout(3500);
    // await tab.waitForSelector('input#submit_test' , {visible:true});
    await tab.click( 'input#submit_test');
    await tab.waitForTimeout(500);
    await tab.click( 'input#submit_test');
    await tab.waitForTimeout(500);
    await tab.click( 'input#submit_test');
    await tab.waitForTimeout(500);
    await tab.click( 'input#submit_test');
    await tab.waitForTimeout(500);
    await tab.click( 'input#submit_test');
    await tab.waitForTimeout(500);
    await tab.click( 'input#submit_test');
    await tab.waitForTimeout(500);
    await tab.click( 'input#submit_test');
    await tab.waitForTimeout(500);
    await tab.click( 'input#submit_test');
    await tab.waitForTimeout(500);
    await tab.click( 'input#submit_test');
    await tab.waitForTimeout(500);
    await tab.click( 'input#submit_test');


    // await tab.waitForSelector('a.btn.button1.submit-complete' , {visible:true});
    // await tab.click( 'a.btn.button1.submit-complete');
































    // await tab.click( '.col-sm-12 a[data-redirect_type="opencontest"].btn.button1.custom-class-click');
    // await tab.waitForSelector('#modeSelect' , {visible:true});
    // await tab.click("#modeSelect");
    // // await tab.waitForTimeout(10);
    // await tab.waitForSelector('div[style="top:57px;height:19px;"]' , {visible:true});
    // await tab.click('div[style="top:57px;height:19px;"]');
    // // await tab.waitForSelector('option[value="python3"]' , {visible:true});
    // // await tab.click('option[value="python3"]');
    // await tab.keyboard.down("Control");
    // await tab.keyboard.down("A");
    // await tab.keyboard.down("V");
    // await tab.click( '.btn.button1.straight-editor-btn.codebtn_1.min120');
    // await tab.waitForTimeout(8500);
    // // await tab.waitForSelector('input#submit_test' , {visible:true});
    // await tab.click( 'input#submit_test');
    // await tab.waitForSelector('a.btn.button1.submit-complete' , {visible:true});
    // await tab.click( 'a.btn.button1.submit-complete');


    // await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
    // await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    // await tab.waitForTimeout(2000);
    // await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible:true});
    // let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');
    // let manageChallengeLi = bothLis[1];
    // await manageChallengeLi.click();
    // await tab.waitForTimeout(2000);








    // let alldata= await tab.$$(".backbone.block-center");//.backbone.block-center
    // let allpendingpromise=[];
    // for ( let i=0 ; i < alldata.length;i++){
    // let oneTag= alldata[i];
    // let pendingpromise= await tab.evaluate(function(element){
    // return element.getAttribute("href");
    //   },oneTag)
    //   pendingpromise="https://www.hackerrank.com"+pendingpromise
    //  allpendingpromise.push(pendingpromise);
    // }
   
    // await console.log(allpendingpromise)
  // }
  // let allpromisecombined=await Promise.all(allpendingpromise);
  // console.log(allpromisecombined);
//   await allpromisecombined;
//   let onequestionpromise= solvequestion(allpromisecombined[0])
//   for ( let i=1 ;i < allpendingpromise.length;i++){
// //   
// let qlink= allpendingpromise[i];
// let newtab=await browser.newPage();
// await addModeratorToASingleQues(newTab,qlink);
    
//   }
//   let allLis = await tab.$$('.pagination li');
//   let nextBtnLi = allLis[allLis.length-2];
//   let isDisabled = await tab.evaluate( function(elem){ return elem.classList.contains("disabled");  } , nextBtnLi );
//   // if true ??
//   if(isDisabled){
//       return;
//   }
//   // else false ??
//   await nextBtnLi.click();
//   await tab.waitForTimeout(5000);
//   await addModerators(browser , tab);
// //    return onequestionpromise;                                       ///////////////////////////////doubt doubt doubt doubt doubt 
// //   })
  
//   await console.log("All question solved");
  
};
login();

// async function addModeratorToASingleQues(newTab , qLink){
//          await newTab.goto(qLink);
//          await newTab.waitForTimeout(2000);
//          await newTab.click('li[data-tab="moderators"]');
//          await newTab.waitForSelector('#moderator' , {visible:true});
//          await newTab.type("#moderator" , "pep");
//          await newTab.click('.btn.moderator-save');
//          await newTab.click('.save-challenge.btn.btn-green');
//          await newTab.waitForTimeout(2000);
//          await newTab.close();
//   }














// const id = "pamico3332@nic58.com";
// const pw = "12345678";
// const puppeteer = require("puppeteer");

// async function login(){
//     let browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: null,
//         args: ["--start-maximized"]
//       });
//     let pages = await browser.pages();
//     let tab = pages[0];
//     await tab.goto("https://www.hackerrank.com/auth/login");
//     await tab.type("#input-1", id);
//     await tab.type("#input-2", pw);
//     await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
//     await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
//     await tab.waitForTimeout(2000);
//     let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
//     await element.click();
//     await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
//     await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
//     await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible:true});
//     let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');
//     let manageChallengeLi = bothLis[1];
//     await manageChallengeLi.click();
//     await addModerators(browser , tab);
// };
// login();


// async function addModerators(browser , tab){
//     await tab.waitForSelector('.backbone.block-center' , {visible:true});
//     let allATags = await tab.$$('.backbone.block-center');
//     let allQuesLinks = [];
//     for(let i=0 ; i<allATags.length ; i++){
//         let qLink = await tab.evaluate( function(elem){  return elem.getAttribute("href");  }   , allATags[i]);
//         qLink = "https://www.hackerrank.com"+qLink;
//         allQuesLinks.push(qLink);
//     }

//     for(let i=0 ; i<allQuesLinks.length ; i++){
//         let qLink = allQuesLinks[i];
//         let newTab = await browser.newPage();
//         await addModeratorToASingleQues(newTab , qLink);
//     }
//     await tab.click(".pagination a.backbone")
//     addModerators(browser,tab);

// }


// async function addModeratorToASingleQues(newTab , qLink){
//        await newTab.goto(qLink);
//        await newTab.waitForTimeout(2000);
//        await newTab.click('li[data-tab="moderators"]');
//        await newTab.waitForSelector('#moderator' , {visible:true});
//        await newTab.type("#moderator" , "pep");
//        await newTab.click('.btn.moderator-save');
//        await newTab.click('.save-challenge.btn.btn-green');
//        await newTab.waitForTimeout(2000);
//        await newTab.close();
// }