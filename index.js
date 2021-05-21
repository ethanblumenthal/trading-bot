const GeminiAPI = require('gemini-api').default;
const getMovingAverage = require('./indicators.js');
require('dotenv').config();

CryptoCompareAPI.setApiKey(process.env.CRYPTOCOMPARE_KEY);

const geminiAPI = new GeminiAPI({
  key: process.env.GEMINI_KEY,
  secret: process.env.GEMINI_SECRET,
  sandbox: true,
});

try {
  const res = await geminiAPI.newOrder({
    amount: 1,
    price: 10000,
    side: 'buy',
    symbol: 'btcusd',
    options: ['immediate-or-cancel'],
  });
  console.log(res);
} catch (err) {
  console.err(err);
}
