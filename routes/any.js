const express = require('express');
const { getAny } = require('../controllers/any');

const router = express.Router();

router
  .route('*')
  .get(getAny)
  .post(getAny)
  .put(getAny)
  .patch(getAny)
  .delete(getAny);

module.exports = router;
