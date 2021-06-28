const puppeteer = require("puppeteer");
let usernames = require("./donor");
let tab;

(async function () {
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    });
    let pages = await browser.pages();
    tab = pages[0];
    let j=0;
    await tab.goto("file:///C:/Users/Hp/Desktop/pep_pp_2021/module1/hackathonpepcoding/ht.html");
    await tab.waitForTimeout(2000)
    let allTweetsContent = await tab.$$("th input");
<<<<<<< HEAD
    for (let i = 0; j <=usernames.length/2&&i<=38; i++)
    {  
        await allTweetsContent[i].click()
        await tab.type("th",usernames[Math.floor((Math.random() * 49) + 1)].user_id)
    }
    // for (let i = 0; j <=usernames.length/2 && i<=15; i++)
    // {  
    //     await allTweetsContent[i].click()
    //     await tab.type("th",usernames[i].user_id)
    // }
=======
    for (let i = 0; j <=usernames.length/2&&i<=21; i++)
    {  
        await allTweetsContent[i].click()
        await tab.type("th",usernames[i].user_id)
    }
>>>>>>> 21e753fa19b6667c17a13bc6c9d4561d15c32009
    
})();