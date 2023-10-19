import { Page, expect} from "@playwright/test";

export async function APItest(page:Page) {
    
    await page.on( "request", req => console.log( `→ ${req.method()} ${req.resourceType()} ${req.url()} `));
    await page.goto("https://www.google.com/");

}

export async function GET({ request }) {
    const response = await request.get('https://emumba-test.herokuapp.com/trend');
    expect(response.status()).toBe(201);
    console.log(response.status())
}

export async function POST({ request }) {
    const response = await request.post('https://emumba-test.herokuapp.com/user', {
        data: {
            "first_name": "Ali",
            "last_name": "Ahmad",
            "email": "ali.ahmadAPItest0@gmail.com",
            "password": "12345",
            "confirm_password": "12345"
              }
    });
    expect(response.status()).toBe(200);
    console.log(response.status())
}


//usage
// import { GET, APItest, POST } from "../main/Demo.tasks";
// import { test } from "@playwright/test";

// test('API Requests and Responses', async ({ page }) => {
  
//     await APItest(page);
//     await APICheck(page);
//     await PostRequest(page);

//   });

// {   
//     name: 'chromium',
//     use: { ...devices['Desktop Chrome'], headless: false, launchOptions: { args: ['--disable-web-security', '--allow-running-insecure-content'] } }
//   },