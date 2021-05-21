const GeminiAPI = require('gemini-api').default;
const CryptoCompareAPI = require('cryptocompare');
global.fetch = require('node-fetch');
require('dotenv').config();

CryptoCompareAPI.setApiKey(process.env.CRYPTOCOMPARE_KEY);

const geminiAPI = new GeminiAPI({
  key: process.env.GEMINI_KEY,
  secret: process.env.GEMINI_SECRET,
  sandbox: true,
});

geminiAPI
  .newOrder({ amount: 1, price: 10000, side: 'buy', symbol: 'btcusd' })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

CryptoCompareAPI.coinList()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
