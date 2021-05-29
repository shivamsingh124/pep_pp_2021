const puppeteer = require("puppeteer");

let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
});
browserOpenPromise
  .then(function (browser) {
    return browser.pages();
  })
  .then(function (pages) {
    tab = pages[0];
    return tab.goto("https://twitter.com/search?q=%23covid%20%23donor%20%23blood%20%23plasma&src=typed_query&f=live");
  })

  .then(function () {
    return tab.waitForSelector(".css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-13hce6t", {visible: true});
  })
  .then(function () {
    return tab.$$(".css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-13hce6t");
  })
  .then(function (allTweetsContent) {
    let allPendingPromises = [];
    for (let i = 1; i <= allTweetsContent.length-2; i++) {
      let oneUsername = allTweetsContent[i];
      let pendingPromise = tab.evaluate(function (element) { return element.textContent;}  , oneUsername);
      allPendingPromises.push(pendingPromise);
    }

    return Promise.all(allPendingPromises);

    
  })
  .then(function(data){
    console.log(data);
  })