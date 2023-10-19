const { test, expect } = require("@playwright/test");
const { customtest } = require("../utils/test-base");

const { POManager } = require("../pageobjects/POManager");
//Json->string->js object
const dataset = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));

for (const data of dataset) {
  test.skip(`@Web Client App login for ${data.productName}`, async ({ page }) => {
    const poManager = new POManager(page);
    //js file- Login js, DashboardPage

    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();
    const cartPage = poManager.getCartPage();
    const ordersReviewPage = poManager.getOrdersReviewPage();
    const ordersHistoryPage = poManager.getOrdersHistoryPage();

    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);

    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
    await dashboardPage.navigateToOrders();
    
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  });
}

customtest(`Client App login`, async ({ page, testDataForOrder }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const dashboardPage = poManager.getDashboardPage();
  const cartPage = poManager.getCartPage();
  
  await loginPage.goTo();
  await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);
  
  await dashboardPage.searchProductAddCart(testDataForOrder.productName);
  await dashboardPage.navigateToCart();

  await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
  await cartPage.Checkout();
});
//test files will trigger parallel
//individual tests in the file will run in sequence
