const ErrorResponse = require('../utils/errorResponse');
const LOCALIZATION_KEYS = require('../utils/localizationKeys');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  if (err.isAxiosError) {
    error = new ErrorResponse(LOCALIZATION_KEYS.SERVER_ERROR, 500);
  }

  res.status(error.statusCode || 500).json({
    error: error.message || LOCALIZATION_KEYS.SERVER_ERROR,
  });
};

module.exports = errorHandler;
