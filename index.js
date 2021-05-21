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

// geminiAPI
//   .newOrder({ amount: 1, price: 10000, side: 'buy', symbol: 'btcusd' })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const getMovingAverage = async (cryptoAsset, fiatCurrency, hours, callback) => {
  if (hours > 169) {
    console.error('Only up to 169 hours allowed!');
    return;
  }

  try {
    const res = await CryptoCompareAPI.histoHour(cryptoAsset, fiatCurrency);
    let data = res.reverse();
    let sum = 0;

    for (let i = 0; i < hours; i++) {
      sum += data[i].close;
    }

    let movingAverage = sum / hours;
    callback(movingAverage);
  } catch (err) {
    console.error(err);
  }
};

getMovingAverage('BTC', 'USD', 100, (res) => {
  console.log('MA: ', res);
});
