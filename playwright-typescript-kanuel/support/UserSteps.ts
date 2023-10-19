import test, { Page } from "@playwright/test";
import APIActions from "./APIActions";
import RESTResponse from "./RESTResponse";
import Assert from "./Assert";
import RESTConstants from "./RESTConstants";

export default class UserSteps {
    private api: APIActions;
    private BASE_URL = process.env.REST_API_BASE_URL;
    constructor(private page: Page) {
        this.api = new APIActions(this.page);
    }
    private get header() {
        return this.api.header.set(RESTConstants.CONTENT_TYPE, RESTConstants.CONTENT_JSON).set(RESTConstants.ACCEPT, RESTConstants.CONTENT_JSON).get();
    }

    public async GET(endPoint: string, operation: string): Promise<RESTResponse> {
        let response: RESTResponse;
        await test.step(`Making call to GET ${operation}`, async () => {
            response = await this.api.rest.get(this.BASE_URL + endPoint, this.header, operation);
        });        
        return response;
    }

    public async POST(endPoint: string, requestBodyFile: string, requestData: any, operation: string): Promise<RESTResponse> {
        let response: RESTResponse;
        await test.step(`Making POST call to ${operation}`, async () => {
            const requestJSON = await this.api.rest.createRequestBody(requestBodyFile, requestData);
            response = await this.api.rest.post(this.BASE_URL + endPoint, this.header, requestJSON);
        });
        return response;
    }

    public async PUT(endPoint: string, requestBodyFile: string, requestData: any, operation: string): Promise<RESTResponse> {
        let response: RESTResponse;
        await test.step(`Making PUT call to ${operation}`, async () => {
            const requestJSON = await this.api.rest.createRequestBody(requestBodyFile, requestData);
            response = await this.api.rest.put(this.BASE_URL + endPoint, this.header, requestJSON);
        });
        return response;
    }

    public async DELETE(endPoint: string, operation: string): Promise<RESTResponse> {
        let response: RESTResponse;
        await test.step(`Making DELETE call to ${operation}`, async () => {
            response = await this.api.rest.delete(this.BASE_URL + endPoint, this.header);
        });
        return response;
    }

    public async verifyStatusCode(response: RESTResponse, statusCode: string) {
        await test.step(`Verifying that status code is ${statusCode}`, async () => {
            await Assert.assertEquals(await response.getStatusCode(), statusCode, RESTConstants.STATUS_CODE);
        });
    }

    public async extractResponseValue(response: RESTResponse, jsonPath: string) {
        let value: string;
        await test.step(`Extract value from response`, async () => {
            value = await response.getTagContentByJsonPath(jsonPath);
        });
        return value;
    }

    public async verifyContent(response: RESTResponse, jsonPath: string, expectedValue: string) {
        await test.step(`Verifying that has value ${expectedValue}`, async () => {
            const value = await response.getTagContentByJsonPath(jsonPath);
            await Assert.assertEquals(value, expectedValue);
        });
    }

    public async verifyContentIsNotNull(response: RESTResponse, jsonPath: string) {
        await test.step(`Verifying that content is NOT NULL`, async () => {
            const value = await response.getTagContentByJsonPath(jsonPath);
            await Assert.assertNotNull(value);
        });
    }



}
//usage
//import UserSteps from "../support/UserSteps";
// let user: UserSteps;
// test.beforeEach(async ({ page }) => {
//     user = new UserSteps(page);
// });
//const response = await user.GET(allUserData.EndPoint, allUserData.Operation);