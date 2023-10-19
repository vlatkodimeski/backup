// // global-setup.ts
// import { request, FullConfig } from '@playwright/test';

// const defaultPost = {
//   title: 'json-server',
//   author: 'typicode',
//   id: 1,
// };

// async function globalSetup(config: FullConfig) {
//   const { baseURL } = config.projects[0].use;
//   const req = await request.newContext({
//     baseURL,
//     extraHTTPHeaders: {
//       'Content-Type': 'application/json',
//       authorization: 'token 5jsBfMf72VYA9QzCXC5eXZkd3q6VB8Gc',
//     },
//   });

//   const posts = await (await req.get('/posts')).json();
//   await Promise.all(posts.map(({ id }) => req.delete(`/posts/${id}`)));
//   await req.post('/posts', { data: JSON.stringify(defaultPost) });
//   await req.dispose();
// }

// export default globalSetup;





// posts.api.spec.ts
import { test, expect } from '@playwright/test';

const defaultPost = {
  title: 'json-server',
  author: 'typicode',
  id: 1,
};
const post = { title: 'My new post', author: 'typicode' };
const authorization = 'token 5jsBfMf72VYA9QzCXC5eXZkd3q6VB8Gc';

test.describe('/posts endpoint', () => {
  test('GET - retrieve all posts', async ({ request }) => {
    const response = await request.get('/posts');

    await expect(response).toBeOK();
    await expect(response).toContainJSON(defaultPost);
  });

  test("GET - retrieve posts and verify that's an array of posts", async ({ request }) => {
    const response = await request.get('/posts');

    await expect(response).toBeOK();
    await expect(response).toHaveJSON([defaultPost]);
  });

  test('POST - create post without auth token', async ({ request }) => {
    const response = await request.post('/posts', {
      data: JSON.stringify(post),
    });

    await expect(response).toBeUnauthorized();
    await expect(response).toHaveJSON({ error: 'Unauthorized' });
  });

  test('POST - create post', async ({ request }) => {
    const response = await request.post('/posts', {
      headers: { authorization },
      data: JSON.stringify(post),
    });

    await expect(response).toBeCreated();
    await expect(response).toMatchJSON(post);
  });

  test('DELETE - post', async ({ request }) => {
    const [{ id }] = await (await request.get('/posts')).json();
    const response = await request.delete(`/posts/${id}`, {
      headers: { authorization },
    });

    await expect(response).toBeOK();
    await expect(response).toHaveJSON({});
  });
});
