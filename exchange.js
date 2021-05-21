const GeminiAPI = require('gemini-api').default;

const geminiAPI = new GeminiAPI({
  key: process.env.GEMINI_KEY,
  secret: process.env.GEMINI_SECRET,
  sandbox: true,
});

export const createMarketOrder = (symbol, side) => {
  try {
    return geminiAPI.newOrder({
      amount: 1,
      price: 20000,
      side,
      symbol,
      options: ['immediate-or-cancel'],
    });
  } catch (err) {
    console.error(err);
  }
};

export const getPriceByTicker = (ticker) => {
  try {
    return geminiAPI.getTicker(ticker);
  } catch (err) {
    console.error(err);
  }
};
