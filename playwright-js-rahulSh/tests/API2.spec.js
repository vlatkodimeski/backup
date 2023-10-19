//https://reflect.run/articles/using-playwright-for-api-testing/
//https://jasonwatmore.com/post/2021/06/25/axios-http-post-request-examples
const { test, expect, request } = require("@playwright/test");

test.skip("post", async ({ request }) => {
  const loginPayLoad = {
    userEmail: "anshika@gmail.com",
    userPassword: "Iamking@000",
  };
  
  const response = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
  {
    data: loginPayLoad
  });

  //expect(response.ok()).toBeTruthy();
  //expect(response.status()).toBe(201);
  
  let response2 = await response.json()
  let token = response2.token;
  console.log(token);
});


// test.skip("Get", async ({ request, baseURL }) => {
//   const response = await request.get(`${baseURL}public/v2/users/`);
//   expect(response.ok()).toBeTruthy();
//   expect(response.status()).toBe(200);
//   console.log(await response.json());
// });

test("post2", async ({ request }) => {
  const loginPayLoad = {
    "email": "git_qaAutomation_veraJohn_casinoCom+2022_12_29_11_11_51@gamesys.com",
    "password": "Abc12345",
    "timezone": "Europe/Berlin"
  };
  
  const response1 = await request.post('https://verajohn-com-eph-rdge-shared.eph.mt1-nonprod.enjoy-platform.net/api/internal/login-modern', 
  {
    data: loginPayLoad
  });

  //expect(response.ok()).toBeTruthy();
  //expect(response.status()).toBe(201);
  
  let response2 = await response
  //let token = response2.token;
  //console.log(response2);

  let regex1 = await getCookieValueByName(response1, /(SSESS[a-zA-Z0-9]*)=(.+?);/)
  console.log(regex1[1] + " | " + regex1[2]);

  const response2 = await request.get('https://verajohn-com-eph-rdge-shared.eph.mt1-nonprod.enjoy-platform.net/', )
  headers: {}

});

async function getCookieValueByName(response, matcher) {
  const matches1 = JSON.stringify(response);
  var matches2 = matches1.match(new RegExp(matcher));
  return matches2;
}