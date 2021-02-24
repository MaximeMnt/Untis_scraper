const puppeteer = require('puppeteer');
const dotenv = require('dotenv').config();

let scrape = async () => {
const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
await page.goto('https://arche.webuntis.com/WebUntis/?school=AP-Hogeschool-Antwerpen#/basic/login');
await page.type('.un-input-group__input', 's106897@ap.be', {delay:100});
await page.keyboard.down('Tab');
await page.keyboard.type(process.env.PASSWORD, {delay:100});
await Promise.all([
    page.waitForNavigation(),
    page.click('.redesigned-button__primary')
]);
 
//Logged in
await page.click('#app > div > div > section > div.un-app > div > aside > nav > a:nth-child(2)');

await page.click('#react-select-5--value > div.Select-input');



//await page.click('#app > div > div > section > div.un-app > div > section > section > div > div > div.un-flex-pane.un-flex-pane--fixed.un-timetable-page__header > div > form > div:nth-child(1) > div');
//await page.type('#react-select-5--value > div.Select-input > input', '2EACL2', {delay:100});
//await page.keyboard.down('Enter');

// await page.type('.Select-placeholder', '2EACL2');

// await page.click('.un-icon');
//browser.close();
// await page.waitForTimeout(3000);
// await page.screenshot({path: "lessen_week_" + Date.now().toString() + ".png"},{fullpage:true});
// await browser.close();
return "test";
};

scrape().then((value) => {

    console.log(value);
});
