const axios = require('axios');
const asyncHandler = require('../middleware/async');

// @desc      Get quote
// @route     GET /api/v1/quote
// @access    Public
exports.getQuote = asyncHandler(async (req, res, next) => {
  if (
    req.query.base_currency &&
    req.query.quote_currency &&
    req.query.base_amount
  ) {
    const response = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${req.query.base_currency}&symbols=${req.query.quote_currency}`
    );
    res.status(200).json({
      exchange_rate: response.data.rates[req.query.quote_currency].toFixed(3),
      qoute_amount: Math.floor(
        req.query.base_amount *
          response.data.rates[req.query.quote_currency] *
          100
      ),
    });
  } else {
    return next(
      new ErrorResponse(
        'Please include base_currency, quote_currency and base_amount query params.',
        400
      )
    );
  }
});
