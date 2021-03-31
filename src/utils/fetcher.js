import { DATA_URL, Authorization } from 'constants/fetch';
import dateFormat from './dateFormat';

export const graphFetcher = async (exchange, from, to) => {
  //http://9b21847128c3.ngrok.io/api/v1/strategies/1/signals/?ticker=BTCUSD&exchange=Bitfinex&from=2017-01-01&to=2020-12-31
  if (from && to) {
    let url = `${DATA_URL}${exchange}&exchange=Bitfinex&from=${from}&to=${to}`;
    try {
      return await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: Authorization,
        },
      }).then((res) => res.json());
    } catch (err) {
      console.log('ERROR', err);
    }
  }
};
