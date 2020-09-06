const Joi = require('joi');

const QuoteQueryParamsSchema = Joi.object({
  base_currency: Joi.string()
    .pattern(/^(USD|EUR|GBP|ILS)$/)
    .required(),
  quote_currency: Joi.string()
    .pattern(/^(USD|EUR|GBP|ILS)$/)
    .required(),
  base_amount: Joi.number().required(),
});

module.exports = QuoteQueryParamsSchema;
