const request = require('supertest');
const app = require('../app');
const LOCALIZATION_KEYS = require('../utils/localizationKeys');

test('Returns UNKNOWN_REQUEST if unknown GET request is performed', async () => {
  const response = await request(app).get('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown POST request is performed', async () => {
  const response = await request(app).post('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown PUT request is performed', async () => {
  const response = await request(app).put('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown PATCH request is performed', async () => {
  const response = await request(app).patch('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown DELETE request is performed', async () => {
  const response = await request(app).delete('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown COPY request is performed', async () => {
  const response = await request(app).copy('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown OPTIONS request is performed', async () => {
  const response = await request(app).options('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown LINK request is performed', async () => {
  const response = await request(app).link('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown UNLINK request is performed', async () => {
  const response = await request(app).unlink('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown PURGE request is performed', async () => {
  const response = await request(app).purge('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown LOCK request is performed', async () => {
  const response = await request(app).lock('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown UNLOCK request is performed', async () => {
  const response = await request(app).unlock('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});

test('Returns UNKNOWN_REQUEST if unknown PROPFIND request is performed', async () => {
  const response = await request(app).propfind('/test').expect(404);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.UNKNOWN_REQUEST);
});
