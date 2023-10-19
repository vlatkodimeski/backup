import test from "@playwright/test";
import jp from "jsonpath";

export default class RESTResponse {
    public constructor(private headers: any, private body: string, private status: number) { }

    /**
     * Get content of tag in response body using JSON path
     * @param jsonPath 
     * @param description 
     * @returns 
     */
    public async getTagContentByJsonPath(jsonPath: string): Promise<string> {
        let text: string;
        await test.step(`Getting content of`, async () => {
            // eslint-disable-next-line prefer-destructuring
            text = jp.query(JSON.parse(this.body), jsonPath)[0];
        });
        return text;
    }

    /**
     * Get header value by header key
     * @param key 
     * @returns 
     */
    public async getHeaderValueByKey(key: string): Promise<string> {
        let value: string;
        await test.step(`Getting header value of ${key}`, async () => {
            const jsonHeaders = await JSON.parse(JSON.stringify(this.headers));
            value = jsonHeaders[key];
        });
        return value;
    }

    /**
     * Get response status code
     * @returns 
     */
    public async getStatusCode(): Promise<number> {
        let status: number;
        await test.step(`Getting status code of`, async () => {
            status = this.status;
        });
        return status;
    }

    /**
    * Get response body
    * @returns 
    */
    public async getBody(): Promise<string> {
        let body: string;
        await test.step(`Getting response body of`, async () => {
            body = this.body;
        });
        return body;
    }

    /**
     * Get response headers 
     * @returns 
     */
    public async getHeaders(): Promise<string> {
        let headers: string;
        await test.step(`Getting response Headers of`, async () => {
            headers = this.headers;
        });
        return headers;
    }
}
