import { APIRequestContext } from '@playwright/test';

export class APIUtils{

    readonly request : APIRequestContext;
    readonly path : string;

    constructor(request : APIRequestContext, path : string){
        this.request = request;
        this.path = path;
    }

    async GET(number : string){
        const response = await this.request.get(`${this.path}`, {
            params: {
                task_effective_number: number,
            }
        });
        return response;
    }

    async POST(payload : any){
        const response = await this.request.post(`${this.path}`, 
        {
            data: payload
        });
        return response;
    }

    async PUT(payload : JSON, sys_id : string){
        const response = await this.request.put(`${this.path}/${sys_id}`, {
            data: payload
        });
        return response;
    }

    async PATCH(payload : JSON, sys_id : string){
        const response = await this.request.patch(`${this.path}/${sys_id}`, {
            data: payload
        });
        return response;
    }

    async DELETE(sys_id : string){
        const response = await this.request.delete(`${this.path}/${sys_id}`, {
            data: { }
        });
        return response;
    }

}

