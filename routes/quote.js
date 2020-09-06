const express = require('express');
const { getQuote } = require('../controllers/quote');

const router = express.Router();

router.route('/').get(getQuote);

module.exports = router;
