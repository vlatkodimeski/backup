const { expect } = require("chai");

class LoginPage {

    async navigate() {
        // const { chromium } = require('playwright');
        //     const browser = await chromium.launch({
        //         headless: false,
        //         executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        //     });
        //     const context = await browser.newContext();
        //     const page = await context.newPage();
            await page.goto('https://www.betking.com/sports/s');
        }


    async login(username, password) {
        await page.fill('//input[@id="txtLoginUsername"]', username);
        await page.fill('//input[@id="txtLoginPassword"]', password);
        await page.click('//button[@class=\'login-button\']');
        this.loginSuccessful();
    }

      async loginFailed(){
          await page.waitForSelector('//div[@class=\'message-box error\']/div[@class=\'contentMessage\']');
          let error = await page.$eval('//div[@class=\'message-box error\']/div[@class=\'contentMessage\']', (errortext) => errortext.textContent);
          expect (error).to.include("Invalid username or password")
      }
      async loginSuccessful(){
          await page.$('//span[@class=\'welcome-section\'][1]');
          console.log(await page.innerText('//span[@class=\'welcome-section\'][1]'));
          let locator = await page.innerText('//span[@class=\'welcome-section\'][1]');
          await expect(locator).equals('Welcome');
          //expect (element).to.not.be.null;
      }
      async alreadyLoggedin(username,password){
          await page.fill('//input[@id="txtLoginUsername"]', username);
          await page.fill('//input[@id="txtLoginPassword"]', password);
          await page.click('//button[@class="login-button"]');
          await page.$('//span[@class=\'welcome-section\'][1]');
      }
}
  module.exports = { LoginPage };