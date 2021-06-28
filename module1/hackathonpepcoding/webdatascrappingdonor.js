const puppeteer = require("puppeteer");
const fs = require("fs");
let tab;

(async function () {
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    });
    let pages = await browser.pages();
    tab = pages[0];
    await tab.goto("https://twitter.com/search?q=%23covid%20%23donor%20&src=typed_query&f=live");
<<<<<<< HEAD
    await tab.keyboard.press("End");
=======
    await tab.keyboard.press("End")
>>>>>>> 21e753fa19b6667c17a13bc6c9d4561d15c32009
    await tab.waitForTimeout(2000)
    await tab.keyboard.press("End");
    await tab.waitForTimeout(2000)
    await tab.keyboard.press("End");
    await tab.waitForTimeout(2000)
    await tab.waitForSelector(".css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-13hce6t", { visible: true });
    let allTweetsContent = await tab.$$(".css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-13hce6t");
    let allPendingPromises = [];
    for (let i = 1; i <= allTweetsContent.length - 2; i++)
    {
        let oneUsername = allTweetsContent[i];
        let pendingPromise = await tab.evaluate(function (element) { return element.textContent; }, oneUsername);
        allPendingPromises.push(pendingPromise);
    }
    let data = await Promise.all(allPendingPromises);
    let jsonData1 = JSON.parse(fs.readFileSync("./donor.json"));

    for (let i = 0; i < data.length; i++) 
    {
        let obj = {
        uidd: data[i]
        }
        jsonData1.push(obj);
    }
    fs.writeFileSync("./donor.json", JSON.stringify(jsonData1));
     await tab.close();
})();