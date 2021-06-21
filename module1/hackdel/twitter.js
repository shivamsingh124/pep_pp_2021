const puppeteer = require("puppeteer");
let allusernames = require("./usernames");
const loginID = "@ShivamSinghMah7";
const password = "trijal123";
let tab;

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
    return tab.goto("https://twitter.com/explore");
  })
  .then(function () {
    return tab.waitForTimeout(5000);
  })
  .then(function () {
    return waitandclick(
      ".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0",
      { visible: true }
    );
  })
  .then(function () {
    return waitandclick(
      ".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0",
      { visible: true }
    );
  })
  .then(function () {
    return tab.type(
      '.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[username_or_email]"]',
      loginID
    );
  })
  .then(function () {
    return tab.type(
      '.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[password]"]',
      password
    );
  })
  .then(function () {
    return tab.click(
      ".css-901oao.r-1awozwy.r-jwli3a.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-b88u0q.r-1777fci.r-rjixqe.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0",
      { visible: true }
    );
  })
  .then(function () {
    return search(allusernames[0].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[0].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[0].userID);
  })
  .then(function () {
    return search(allusernames[1].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[1].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[1].userID);
  })
  .then(function () {
    return tab.waitForTimeout(2000);
  })
  .then(function () {
    return search(allusernames[2].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[2].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[2].userID);
  })
  .then(function () {
    return search(allusernames[3].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[3].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[3].userID);
  })
  .then(function () {
    return search(allusernames[4].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[4].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[4].userID);
  })
  .then(function () {
    return search(allusernames[5].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[5].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[5].userID);
  })
  .then(function () {
    return search(allusernames[6].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[6].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[6].userID);
  })
  .then(function () {
    return search(allusernames[7].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[7].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[7].userID);
  })
  .then(function () {
    return search(allusernames[8].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[8].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[8].userID);
  })
  .then(function () {
    return search(allusernames[9].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[9].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[9].userID);
  })
  .then(function () {
    return search(allusernames[10].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[10].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[10].userID);
  })
  .then(function () {
    return search(allusernames[11].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[11].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[11].userID);
  })
  .then(function () {
    return search(allusernames[12].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[12].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[12].userID);
  })
  .then(function () {
    return search(allusernames[13].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[13].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[13].userID);
  })
  .then(function () {
    return search(allusernames[14].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[14].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[14].userID);
  })
  .then(function () {
    return search(allusernames[15].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[15].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[15].userID);
  })
  .then(function () {
    return search(allusernames[16].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[16].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[16].userID);
  })
  .then(function () {
    return search(allusernames[17].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[17].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[17].userID);
  })
  .then(function () {
    return search(allusernames[18].userID);
  })
  .then(function () {
    console.log("Message Delivered To " + allusernames[18].userID);
  })
  .catch(function () {
    console.log("Message NOT Delivered To " + allusernames[18].userID);
  })
  .then(function () {
    console.log("Automated Messages Delivered To All Twitter Usernamess.");
  });
function waitandclick(selector) {
  return new Promise(function (scb, fcb) {
    let waitpromise = tab.waitForSelector(selector, {
      visible: true,
      timeout: 5000,
    });
    waitpromise
      .then(function () {
        return tab.click(selector);
      })
      .then(function () {
        scb();
      })
      .catch(function () {
        fcb();
      });
  });
}

function search(ID) {
  return new Promise(function (scb, fcb) {
    let waitpromise = tab.waitForTimeout(5000);
    waitpromise
      .then(function () {
        return tab.type(
          ".r-30o5oe.r-1niwhzg.r-17gur6a.r-1yadl64.r-deolkf.r-homxoj.r-poiln3.r-7cikom.r-1ny4l3l.r-xyw6el.r-641cr4.r-1dz5y72.r-fdjqy7.r-13qz1uu",
          ID
        );
      })
      .then(function () {
        return tab.waitForTimeout(3000);
      })
      .then(function () {
        return tab.click('li[role="listitem"]');
      })
      .then(function () {
        return tab.waitForTimeout(5000);
      })
      .then(function () {
        return waitandclick('div[aria-label="Message"]', { visible: true });
      })
      .then(function () {
        return waitandclick(
          ".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr",
          { visible: true }
        );
      })
      .then(function () {
        return tab.type(
          ".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr",
          "Hi!, We are from Team CoviChat. Hope You Are Well. If You Are Either In Need Of Any COVID Resources OR You Are Willing To Help Other People With Urgent Requirements Such As Of Verified Leads, Oxygen, Blood, Plasma, Ventilators, Ambulance, Medicines,etc, then please become a part of our COVICHAT Community by Singing Up and then Joining Through This Website Link : https://60b323e65fa6c4214725377d--hungry-ramanujan-95c835.netlify.app/  STAY SAFE"
        );
      })
      .then(function () {
        return tab.click(
          'path[d="M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z"]',
          { visible: true }
        );
      })
      .then(function () {
        return tab.goto("https://twitter.com/explore");
      })
      .then(function () {
        scb();
      })
      .catch(function () {
        fcb();
      });
  });
}