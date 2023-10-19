import { test, expect } from '@playwright/test'
//import { getCookieValueByName, getCookieValueByName1} from '../../helpers';
//import { APIUtils } from '../../support/APIUtils';
//var apiUtils;

test.describe.serial('gamesys', () => {
//   test.beforeAll(async ({ request }) => {
//     apiUtils = new APIUtils(request, '');  //var that I am passing path.incident
// });

  test.skip('login', async ({ request }) => {
    
    //const response = await request.post(`https://verajohn-com-eph-rdge-shared.eph.mt1-nonprod.enjoy-platform.net/api/internal/login-modern`, {
    const response = await request.post(`https://www.verajohn.com/api/internal/login-modern`, {
    // data: {
    //     email: "git_qaAutomation_veraJohn_casinoCom+2023_01_11_02_23_56@gamesys.com",
    //     password: "Abc12345",
    //     timezone: "Europe/Berlin",
    //   },
    // })
    data: {
      email: "theia+observability@gamesys.co.uk",
      password: "123123qq",
      timezone: "Europe/Berlin",
    },
  })

    const responseBody = JSON.parse(await response.text())
    console.log(await response.headers())
    
    //const header = response.headers();
    //const mathcer = "/(SSESS[a-zA-Z0-9]*)=(.+?);/";
    let regex = await getCookieValueByName1(response.headers(), /(SSESS[a-zA-Z0-9]*)=(.+?);/);
    console.log(regex[1])
    //const 
    //expect(responseBody.id).toBe(1000)
    //expect(responseBody.createdAt).toBeTruthy()
    
  })
  // test('framework1', async ({ request }) => {
    
  //   const payloadS = {
	// 		email: "git_qaAutomation_veraJohn_casinoCom+2022_12_29_11_11_51@gamesys.com",
	// 		password: "Abc12345",
	// 		timezone: "Europe/Berlin",
	// 	  };
    
  //   const response = await apiUtils.createIncident(payloadS);
    
  // })
  

  







})
