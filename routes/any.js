const express = require('express');
const { getAny } = require('../controllers/any');

const router = express.Router();

router.route('*').all(getAny);

module.exports = router;
