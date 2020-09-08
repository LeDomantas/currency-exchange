const axios = require('../utils/axiosExchangeratesapi');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Quote = require('../models/QuoteQueryParams');
const LRUCache = require('../models/LRUCache');

const cache = new LRUCache(2);

// @desc      Get quote
// @route     GET /quote
// @access    Public
exports.getQuote = asyncHandler(async (req, res, next) => {
  const validation = Quote.validate(req.query);
  if (validation.error) {
    return next(new ErrorResponse(validation.error.message, 400));
  }
  const key = req.query.base_currency + req.query.quote_currency;
  let data = cache.get(key);
  if (!data) {
    data = (
      await axios.get(
        `/latest?base=${req.query.base_currency}&symbols=${req.query.quote_currency}`
      )
    ).data;
    cache.put(key, data);
  }
  console.log(data);
  res.status(200).json({
    exchange_rate: +data.rates[req.query.quote_currency].toFixed(3),
    quote_amount: Math.floor(
      req.query.base_amount * data.rates[req.query.quote_currency]
    ),
  });
});
