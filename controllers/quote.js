// @desc      Get quote
// @route     GET /api/v1/quote
// @access    Public
exports.getQuote = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show quote' });
};
