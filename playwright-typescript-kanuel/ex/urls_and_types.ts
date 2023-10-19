export enum URLs {
  api_1 = "https://jsonplaceholder.typicode.com/comments?postId=1",
  api_2 = "https://jsonplaceholder.typicode.com/comments?postId=999999999999",
  api_3 = "https://jsonplaceholder.typicode.com/comments/10",
  api_4 = "https://jsonplaceholder.typicode.com/users/111",
  api_5 = "https://jsonplaceholder.typicode.com/posts",
  api_6 = "https://jsonplaceholder.typicode.com/photos/5000000?id=1",
  api_7 = "https://jsonplaceholder.typicode.com/posts/1",
  api_8 = "https://jsonplaceholder.typicode.com/posts/500000",
  api_9 = "https://jsonplaceholder.typicode.com/posts/5",
  api_10 = "https://jsonplaceholder.typicode.com/posts/1",
}

export enum SendingTypes {
  ContentType = "Content-Type",
  applicationJson = "application/json",
}

export enum statusCode {
  OK = 200,
  Created = 201,
  NotFound = 404,
  InternalServerError = 500,
}

export const Contains = {
  bodyEmptyObj: {},
  bodyCertainEmail: "Carmen_Keeling@caroline.name",
  bodyNewId: 1000,
  errorUndefined: undefined,
};



//usage
// import { URLs } from "./urls_and_types";
// import { SendingTypes } from "./urls_and_types";
// import { statusCode } from "./urls_and_types";
// import { Contains } from "./urls_and_types";
//const res = await superagent.get(URLs.api_1);
//expect(res.status).toBe(statusCode.OK);
//expect(res.status).toBe(statusCode.Created);