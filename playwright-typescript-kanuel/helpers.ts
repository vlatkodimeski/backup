import { APIRequestContext } from "@playwright/test";
import fs from 'fs';
import { APIResponse, expect } from '@playwright/test';

export async function loadHomepage(page) {
  await page.goto('https://www.example.com')
}

export async function assertTitle(page) {
  await page.waitForSelector('h5')
}


export const getCookieValueByName = async (response: string, matcher: string) => {
  const matches1 = JSON.stringify(response);
  var matches2 = matches1.match(new RegExp(matcher));
  return matches2;
};

export async function getCookieValueByName1(response, matcher: string) {
  const matches1 = JSON.stringify(response);
  var matches2 = matches1.match(new RegExp(matcher));
  return matches2;
}



//readonly request : APIRequestContext;
//request : APIRequestContext

export const POST = async (request: APIRequestContext, URL: string, body: any) => {
  const createBookingReq = await request.post(URL, {
    data: body,
  });
  return createBookingReq;
};

export class APIActions {

  async verifyStatusCode(response: APIResponse): Promise<void> {
      await expect(response, `200 Status code was not displayed.`).toBeOK();
  }

  async verifyResponseBody(expectedResponseBodyParams: string, responsePart: JSON, responseType: string): Promise<void> {
      let status = true;
      let fieldNames = `Parameter`;
      const headers = expectedResponseBodyParams.split("|");
      const responseToString = JSON.stringify(responsePart).trim();
      for (let headerKey of headers) {
          if (!(responseToString.includes(headerKey.trim()))) {
              status = false;
              fieldNames = fieldNames + `, ` + headerKey;
              break;
          }
      }
      expect(status, `${fieldNames} was not present in ${responseType}`).toBe(true);
  }

  async verifyResponseHeader(expectedResponseHeaderParams: string, responsePart: Array<{ name: string, value: string }>, responseType: string): Promise<void> {
      let status = true;
      let fieldNames = `Parameter`;
      for (let responseKey of responsePart) {
          if (!(expectedResponseHeaderParams.includes(responseKey.name.trim()))) {
              status = false;
              fieldNames = fieldNames + ' ,' + responseKey.name;
              break;
          }
      }
      expect(status, `${fieldNames} was not present in ${responseType}`).toBe(true);
  }

  async readFromJsonFile(fileName: string): Promise<any> {
      return JSON.parse(fs.readFileSync(`./data/${fileName}.json`, `utf8`));
  }




}
//usage
//const apiActions = new APIActions();
//const requestBody = JSON.parse((await apiActions.readValuesFromTextFile('postUsers')).split(`#`)[0]);

export async function globalSetup() {
  // Configure ENV variables
  require('dotenv').config()
}