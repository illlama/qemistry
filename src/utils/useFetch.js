import { useState, useEffect } from 'react';
import { DATA_URL, Authorization } from 'constants/fetch';
import makePnl from './makePnl';

function useFetch(setRawData, setGraphData, exchange, from, to, money) {
  const array = [money];
  const [loading, setLoading] = useState(true);
  const [tmp, setTmp] = useState(null);
  const option = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: Authorization,
    },
  };
  let url = `${DATA_URL}${exchange}&exchange=Bitfinex&from=${from}&to=${to}`;
  const fetchInitialData = async () => {
    const response = await fetch(url, option);
    const data = await response.json();
    setTmp(data.filter((data) => data.pnl !== null));
    makePnl(array, tmp).then((array) => setGraphData(array));
    setRawData(tmp);

    setLoading(false);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
}

export default useFetch;
