import CryptoCompareAPI from 'cryptocompare';

CryptoCompareAPI.setApiKey(process.env.CRYPTOCOMPARE_KEY);

export const getMovingAverage = async (
  cryptoAsset,
  fiatCurrency,
  hours,
  callback,
) => {
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
