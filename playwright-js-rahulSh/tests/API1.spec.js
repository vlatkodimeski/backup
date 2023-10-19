const { test, expect, request } = require("@playwright/test");

//test.use({ browserName: 'webkit'});
test("@Web Browser Context-Validating Error login", async ({ request }) => {
  const loginPayLoad = {
    userEmail: "anshika@gmail.com",
    userPassword: "Iamking@000",
  };

  const apiContext = await request.newContext();
  const response = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login");
  {
    data: loginPayLoad;
  }
  console.log(await response.json());
});
