const GeminiAPI = require('gemini-api').default;
require('dotenv').config();

const geminiAPI = new GeminiAPI({
  key: process.env.GEMINI_KEY,
  secret: process.env.GEMINI_SECRET,
  sandbox: true,
});

geminiAPI
  .newOrder({ amount: 1, price: 10000, side: 'buy', symbol: 'btcusd' })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
