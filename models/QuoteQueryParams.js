const Joi = require('joi');
const LOCALIZATION_KEYS = require('../utils/localizationKeys');

const QuoteQueryParamsSchema = Joi.object({
  base_currency: Joi.string()
    .pattern(/^(USD|EUR|GBP|ILS)$/)
    .required()
    .error((err) => {
      switch (err[0].code) {
        case 'string.pattern.base':
          return new Error(LOCALIZATION_KEYS.NOT_SUPPORTED_BASE_CURRENCY);
        case 'any.required':
          return new Error(LOCALIZATION_KEYS.BASE_CURRENCY_REQUIRED);
        default:
          return err;
      }
    }),
  quote_currency: Joi.string()
    .pattern(/^(USD|EUR|GBP|ILS)$/)
    .required()
    .error((err) => {
      switch (err[0].code) {
        case 'string.pattern.base':
          return new Error(LOCALIZATION_KEYS.NOT_SUPPORTED_QUOTE_CURRENCY);
        case 'any.required':
          return new Error(LOCALIZATION_KEYS.QUOTE_CURRENCY_REQUIRED);
        default:
          return err;
      }
    }),
  base_amount: Joi.number()
    .integer()
    .required()
    .error((err) => {
      switch (err[0].code) {
        case 'number.base':
          return new Error(LOCALIZATION_KEYS.BASE_AMOUNT_NOT_NUMBER);
        case 'any.required':
          return new Error(LOCALIZATION_KEYS.BASE_AMOUNT_REQUIRED);
        case 'number.integer':
          return new Error(LOCALIZATION_KEYS.BASE_AMOUNT_NOT_INTEGER);
        default:
          return err;
      }
    }),
});

module.exports = QuoteQueryParamsSchema;
