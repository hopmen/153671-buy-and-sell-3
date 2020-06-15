'use strict';

const request = require(`supertest`);
const server = require(`../cli/server`);


describe(`Books API end-points`, () => {
  //Пройден
  test(`When get books status code should be 200`, async () => {
    const res = await request(server.run([3000])).get(`/offers`);
    expect(res.statusCode).toBe(200);
  });
  //провален
  test(`When get books status code should be 200`, async () => {
    const res = await request(server.run([3000])).get(`/api/offers`);
    expect(res.statusCode).toBe(200);
  });
});
