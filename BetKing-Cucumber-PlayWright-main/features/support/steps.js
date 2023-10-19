const {Given, When, Then} = require ('cucumber')
const {LoginPage} = require('../../page_object/login.page')
const {ProductPage} = require('../../page_object/product.page')

const loginpage = new LoginPage();
const productpage = new ProductPage();

var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(100 * 1000);

Given('User launched BetKing login page', async()=>{
    await loginpage.navigate();
 });

When('User logged in Betking using the invalid username {string} and the invalid password {string}',async(username,password) =>{
    await loginpage.alreadyLoggedin(username,password);
});

Then('User should not get logged in', async()=>{
    await loginpage.loginFailed();
});

When('User create account with {string}, {string}, {string} and {string}', async(fname, lname, email, password) => {
    let random = Math.floor(Math.random()*90000) + 10000;
    email = email.replace('Deepak','Deepak'+random);
    await loginpage.createAccount(fname,lname,email,password);
});

Then('User account should get created', async()=> {
    await loginpage.loginSuccessful();
});

Then('user should see a BetKing welcome text', async()=> {
    await loginpage.loginSuccessful();
});

When('User logged in BetKing using the valid username {string} and the valid password {string}', async (username, password) =>{
    await loginpage.alreadyLoggedin(username,password);
});

When('User searches for the {string}', async (item) =>{
    await productpage.searchProduct(item);
    await productpage.productSearchSuccessful(item);
});

When('User adds {string} product to the cart', async (item) =>{
    await productpage.addProduct(item);
});

Then('User should be able to view and add the listed product {string}', async (item) =>{
    await productpage.productAddSuccessful(item);
});


Then('User should get the Confirmation of Order', async ()=> {
    await page.screenshot({ path: 'page.png', fullPage: true });
});

