const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.exchangeratesapi.io',
});

module.exports = instance;
