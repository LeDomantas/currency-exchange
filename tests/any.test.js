const request = require('supertest');
const app = require('../app');
const LOCALIZATION_KEYS = require('../utils/localizationKeys');

test('Returns UNKNOWN_REQUEST if unkown request is performed', async () => {
  const response = await request(app).get('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});
