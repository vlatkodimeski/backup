import { APIRequestContext, expect } from "@playwright/test";
//import { auth } from "../tests/main.spec";
//import { base_url } from "../utils/data";

export class BundlePage {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async GET(baseUrl : any) {
    const overview_details = await this.request.get(baseUrl, {
      headers: {
        authorization: auth,
      },
      data: {
        start_date: "2022-12-01",
        end_date: "2022-12-31",
        comparing_to: "month",
      },
    });

  }

  async POST(bundle_name, products_id, payload : any) {
    const bundle_create = await this.request.post(`${base_url}/v1/onboarding/basic-information/`,
      {
        headers: {
          authorization: auth,
        },
        data: payload,

        
      }
    );


  }

  
  async PUT(plugin_slug) {
    const plugin_update = await this.request.put(`${base_url}/v1/plugins/${plugin_slug}`,
      {
        headers: {
          authorization: auth,
        },
        data: {
          demo: null,
          description: null,
          homepage: null,
    
        },
      }
    );

    
    const plugin_update_response = await plugin_update.json();
    
  }

  async DELETE(product_slug, product_type) {
    const product_delete = await this.request.delete(`${base_url}/v1/${product_type}s/${product_slug}`,
      {
        headers: {
          authorization: auth,
        },
      }
    );

    
  }



}




//usage
/*
import { BundlePage } from "../pages/bundle";
test("Bundle Create & Update", async ({ request }) => {
  const bundle = new BundlePage(request);

  //Could be any valid bundle name
  const bundle_name: string = faker.lorem.words(2); //Auto generated bundle name
  const website_url: string = "https://modernsound.s3-tastewp.com"; //Website URL through which this bundle will be sold
  const product_name: string = "Test Product N3"; //Product Name which will be connected with this bundle
  const bundle_products: string[] = [];
  const platform_name: string = "edd";

  await bundle.bundle_create(bundle_name, products_id);

  // -------- Bundle Update -------- 
  
   // updateable_bundle_name = Any valid existing bundle name and this bundle will be updated
   // new_bundle_name = New Bundle Name
   

  // let updateable_bundle_name: string = ""; //Any valid updateable bundle name
  // let new_bundle_name: string = ""; //Any valid bundle name

  // await bundle.bundle_update(updateable_bundle_name, new_bundle_name);
});
*/
