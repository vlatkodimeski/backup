import { test, expect } from '@playwright/test'
import { POST, APIActions } from "../../helpers";
//import { APIActions } from '@lib/APIActions';
import { loginDTO } from '../../dto/config.model';
import 'dotenv/config';
import { execSync } from 'child_process';

test.describe.parallel('API Testing', () => {
  

  test('Simple API Test - Assert Response Status', async ({ request }) => {
    const apiActions = new APIActions();

    //const requestBody = await apiActions.readFromJsonFile('login');
    //requestBody.email = '';
    
    const request1 = await POST(request, process.env.BASE_URL, await apiActions.readFromJsonFile('login'));
    //const request1 = await POST(request, 'https://verajohn-com-eph-rdge-shared.eph.mt1-nonprod.enjoy-platform.net/api/internal/login-modern', JSON.stringify(loginDTO));
    //console.log(request1.headers())

    
    //console.log(process.env.BASE_URL)

    





   

  })

  
})
