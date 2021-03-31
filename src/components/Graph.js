import React, { useEffect, useState } from 'react';
import styles from 'scss/style.module.scss';
import { graphFetcher } from 'utils/fetcher';
import GraphContent from './GraphContent';

const Graph = ({ fromGraphDate, toGraphDate, money, isBtc }) => {
  const [btcData, setBtcData] = useState({ date: fromGraphDate, res: money });
  const [ethData, setEthData] = useState({ date: fromGraphDate, res: money });

  const calGraphData = (pnl, tmpArray) => {
    let resPnl = Math.round(tmpArray[tmpArray.length - 1].res * (1 + pnl));
    return resPnl;
  };
  const fetchBtcData = async () => {
    await graphFetcher('BTCUSD', fromGraphDate, toGraphDate).then(
      (fetchedData) => {
        if (fetchedData) {
          let tmp = fetchedData.filter((data) => data.pnl !== null);
          let tmpArray = [{ date: fromGraphDate, res: money }];
          tmp
            .slice(0)
            .reverse()
            .forEach((data) =>
              tmpArray.push({
                date: data.signaltime.slice(0, 10),
                res: calGraphData(data.pnl, tmpArray),
              }),
            );
          setBtcData(tmpArray);
        }
      },
    );
  };
  const fetchEthData = async () => {
    await graphFetcher('ETHUSD', fromGraphDate, toGraphDate).then(
      (fetchedData) => {
        if (fetchedData) {
          let tmp = fetchedData.filter((data) => data.pnl !== null);
          let tmpArray = [{ date: fromGraphDate, res: money }];
          tmp
            .slice(0)
            .reverse()
            .forEach((data) =>
              tmpArray.push({
                date: data.signaltime.slice(0, 10),
                res: calGraphData(data.pnl, tmpArray),
              }),
            );
          setEthData(tmpArray);
        }
      },
    );
  };

  useEffect(() => {
    setBtcData({ date: fromGraphDate, res: money });
    setEthData({ date: fromGraphDate, res: money });
    fetchBtcData();
    fetchEthData();
  }, [fromGraphDate, toGraphDate, money, isBtc]);
  return (
    <div className="h-12">
      {btcData !== undefined && ethData !== undefined && (
        <GraphContent btcData={btcData} ethData={ethData} isBtc={isBtc} />
      )}
    </div>
  );
};

export default Graph;
