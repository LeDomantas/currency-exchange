const axios = require('../utils/axios-exchangeratesapi');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Quote = require('../models/QuoteQueryParams');

// @desc      Get quote
// @route     GET /api/v1/quote
// @access    Public
exports.getQuote = asyncHandler(async (req, res, next) => {
  const validation = Quote.validate(req.query);
  if (validation.error) {
    return next(new ErrorResponse(validation.error.message, 400));
  }
  const response = await axios.get(
    `/latest?base=${req.query.base_currency}&symbols=${req.query.quote_currency}`
  );
  res.status(200).json({
    exchange_rate: response.data.rates[req.query.quote_currency].toFixed(3),
    qoute_amount: Math.floor(
      req.query.base_amount *
        response.data.rates[req.query.quote_currency] *
        100
    ),
  });
});
