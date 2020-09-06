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
      }
    }),
  base_amount: Joi.number()
    .required()
    .error((err) => {
      switch (err[0].code) {
        case 'number.base':
          return new Error(LOCALIZATION_KEYS.BASE_AMOUNT_NOT_NUMBER);
        case 'any.required':
          return new Error(LOCALIZATION_KEYS.BASE_AMOUNT_REQUIRED);
      }
    }),
});

module.exports = QuoteQueryParamsSchema;
