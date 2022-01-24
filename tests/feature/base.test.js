const supertest = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const { generateAuthTokens } = require('../../src/utils/security/token');

const request = supertest(app);

describe('Basic', () => {
  test('require token for users', async () => {
    const response = await request.get('/v1/auth').send();

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  test('get queue errors', async () => {
    const tokenData = await generateAuthTokens({ id: 1 });
    const response = await request
      .get('/v1/auth/error-logs')
      .set('Authorization', `Bearer ${tokenData.access.token}`)
      .send();

    expect(response.status).toBe(httpStatus.OK);
  });
});
