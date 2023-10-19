 
 //my-test.ts

 /*
 fixtures.ts
import { APIRequestContext, test as base } from '@playwright/test'
import authenticatedApiRequest from './api-context'

// Declare the types of your fixtures.
type Fixtures = {
  authenticatedApiRequest: APIRequestContext
}

// This new context can be used in multiple test files, and each of them will get the fixtures.
const test = base.extend<Fixtures>({
  // eslint-disable-next-line no-empty-pattern
  authenticatedApiRequest,
})

export default test




api-context.ts
// my-test.ts
import { APIRequestContext, request } from '@playwright/test'

const authenticatedApiRequest = async (
  // eslint-disable-next-line no-empty-pattern
  {}: any,
  // eslint-disable-next-line no-unused-vars
  use: (arg0: APIRequestContext) => any
) => {
  const encode = (str: string) => Buffer.from(str).toString('base64')
  const credentialsBase64 = encode(
    `${process.env.ENV_USERNAME}:${process.env.ENV_PASSWORD}`
  )

  // Set up the fixture.
  const context = await request.newContext({
    baseURL: process.env.ENV_BASE_URL,
    extraHTTPHeaders: {
      Authorization: `Basic ${credentialsBase64}`,
    },
  })

  // Use the fixture value in the test.
  await use(context)
}

export default authenticatedApiRequest







/* eslint-disable no-console */
import { APIResponse, expect } from '@playwright/test'
import JsonSchema from 'jsonschema'

/**
 * Given the response and expected status code, this function validates correct status code was received in the response
 *
 * @param {APIResponse} response API response
 * @param {(number | number[])} expectedStatusCode Expected status code in the reponse. This can be single or an array. In case of array, the validation will pass if the response status code is one of the objects within the array
 */
export function validateResponseStatusCode(
  response: APIResponse,
  expectedStatusCode: number | number[]
) {
  const isArray = Array.isArray(expectedStatusCode)

  if (isArray) {
    expect.soft(expectedStatusCode).toContain(response.status())
  } else {
    expect.soft(expectedStatusCode).toBe(response.status())
  }
}

/**
 * This function can be used for validating the response payload schema
 * Given the response and expected json-schema, this function validates response json to follow the json schema
 * @async
 * @param {APIResponse} response API response
 * @param {{ [k: string]: any }} schema Expected json schema
 */
export async function validateJsonSchema(
  response: APIResponse,
  schema: { [k: string]: any }
) {
  const validationResult = JsonSchema.validate(await response.json(), schema)

  // Validate the schema and print errors if assertion fails
  expect
    .soft(validationResult.valid, validationResult.errors.toString())
    .toBeTruthy()
}

/**
 * This function can be used for validating the payload and state.
 * Given the response with a json and expected json object, this function validates json content to be the same
 * @async
 * @param {APIResponse} response
 * @param {{ [k: string]: any }} json
 */
export async function validateJson(
  response: APIResponse,
  json: { [k: string]: any }
) {
  expect.soft(await response.json()).toEqual(json)
}

/**
 * Asserts that the response headers contains the expected header
 * @param {APIResponse} response
 * @param {{ [k: string]: any }} expectedHeaders
 */
export function validateHeaders(
  response: APIResponse,
  expectedHeaders: { [k: string]: any }
) {
  expect.soft(response).toHaveHeaders(expectedHeaders)
}





*/





import { expect } from '@playwright/test'
import test from '../src/fixtures/fixtures'
import { validateHeaders, validateJsonSchema, validateResponseStatusCode} from '../src/test-actions/api-actions'

test.describe('/booking - GET', () => {
  test.describe('Positive Tests', () => {
    test('Execute API call with valid required parameters', async ({
      request,
    }) => {
      const jsonSchema = {
        type: 'array',
        default: [],
        title: 'Root Schema',
        items: {
          type: 'object',
          title: 'A Schema',
          required: ['bookingid'],
          properties: {
            bookingid: {
              type: 'integer',
              title: 'The bookingid Schema',
              examples: [3271, 354, 1266, 3103, 1681, 2200],
            },
          },
          examples: [
            {
              bookingid: 3271,
            },
            {
              bookingid: 354,
            },
            {
              bookingid: 1266,
            },
            {
              bookingid: 3103,
            },
            {
              bookingid: 1681,
            },
            {
              bookingid: 2200,
            },
          ],
        },
        examples: [
          [
            {
              bookingid: 3271,
            },
            {
              bookingid: 354,
            },
            {
              bookingid: 1266,
            },
            {
              bookingid: 3103,
            },
            {
              bookingid: 1681,
            },
            {
              bookingid: 2200,
            },
          ],
        ],
      }

      const response = await request.get('/booking', {
        headers: {
          'content-type': 'application/json',
        },
      })

      validateResponseStatusCode(response, 200)
      validateHeaders(response, {
        'content-type': 'application/json; charset=utf-8',
      })
      validateJsonSchema(response, jsonSchema)
    })
  })
  test.describe('Negative Tests with invalid input', () => {
    test('Execute API call with invalid values in HTTP headers', async ({
      request,
    }) => {
      let response = await request.get('/booking', {
        headers: {
          Accept: 'invalid',
        },
      })
      expect.soft(response).not.toBeOK()

      response = await request.get('/booking', {
        headers: {
          'content-type': 'invalid',
        },
      })
      expect.soft(response).not.toBeOK()
    })
  })
})


////validataion
// import { APIResponse, expect } from '@playwright/test'
// import JsonSchema from 'jsonschema'
// export function validateHeaders(
//   response: APIResponse,
//   expectedHeaders: { [k: string]: any }
// ) {
//   expect.soft(response).toHaveHeaders(expectedHeaders)
// }