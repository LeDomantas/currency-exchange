const LOCALIZATION_KEYS = require('../utils/localizationKeys');

// @desc      Get any invalid URL
// @route     GET /*
// @access    Public
exports.getAny = (req, res, next) => {
  res.send({ error: LOCALIZATION_KEYS.UNKNOWN_REQUEST }, 404);
};
