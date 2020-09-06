const request = require('supertest');
const app = require('../app');
const LOCALIZATION_KEYS = require('../utils/localizationKeys');

test('Returns exchange_rate and quote_amount as numbers', async () => {
  const response = await request(app)
    .get('/quote')
    .query({ base_currency: 'USD', quote_currency: 'ILS', base_amount: 1 })
    .expect(200);

  const exchange_rate = response.body.exchange_rate;
  expect(typeof exchange_rate).toBe('number');

  const quote_amount = response.body.quote_amount;
  expect(typeof quote_amount).toBe('number');
});

test('Returns BASE_CURRENCY_REQUIRED if no base_currency provided', async () => {
  const response = await request(app)
    .get('/quote')
    .query({ quote_currency: 'ILS', base_amount: 1 })
    .expect(400);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.BASE_CURRENCY_REQUIRED);
});

test('Returns QUOTE_CURRENCY_REQUIRED if no quote_currency provided', async () => {
  const response = await request(app)
    .get('/quote')
    .query({ base_currency: 'USD', base_amount: 1 })
    .expect(400);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.QUOTE_CURRENCY_REQUIRED);
});

test('Returns BASE_AMOUNT_REQUIRED if no base_amount provided', async () => {
  const response = await request(app)
    .get('/quote')
    .query({ base_currency: 'USD', quote_currency: 'ILS' })
    .expect(400);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.BASE_AMOUNT_REQUIRED);
});

test('Returns NOT_SUPPORTED_BASE_CURRENCY if not supported base_currency provided', async () => {
  const response = await request(app)
    .get('/quote')
    .query({ base_currency: 'CNY', quote_currency: 'ILS', base_amount: 1 })
    .expect(400);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.NOT_SUPPORTED_BASE_CURRENCY);
});

test('Returns NOT_SUPPORTED_QUOTE_CURRENCY if not supported quote_currency provided', async () => {
  const response = await request(app)
    .get('/quote')
    .query({ base_currency: 'USD', quote_currency: 'CNY', base_amount: 1 })
    .expect(400);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.NOT_SUPPORTED_QUOTE_CURRENCY);
});

test('Returns BASE_AMOUNT_NOT_NUMBER if not a number base_amount provided', async () => {
  const response = await request(app)
    .get('/quote')
    .query({ base_currency: 'USD', quote_currency: 'ILS', base_amount: 'test' })
    .expect(400);

  const error = response.body.error;
  expect(error).toBe(LOCALIZATION_KEYS.BASE_AMOUNT_NOT_NUMBER);
});
