import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import styles from 'scss/style.module.scss';
import { graphFetcher } from 'utils/fetcher';
import GraphContent from './GraphContent';

const Graph = ({ fromGraphDate, toGraphDate, money, isBtc }) => {
  const [btcData, setBtcData] = useState(null);
  const [ethData, setEthData] = useState(null);
  const [btcGraphData, setBtcGraphData] = useState([money]);
  const [ethGraphData, setEthGraphData] = useState([money]);
  const [btcLabels, setBtcLabels] = useState(['2017-01-01']);
  const [ethLabels, setEthLabels] = useState(['2017-01-01']);

  const calGraphData = (dataArray) => {
    let graphArray = [money];
    dataArray &&
      dataArray
        .slice(0)
        .reverse()
        .forEach((data) => {
          graphArray.push(
            Math.round(graphArray[graphArray.length - 1] * (1 + data.pnl)),
          );
        });
    return graphArray;
  };
  const fetchBtcData = async () => {
    await graphFetcher('BTCUSD', fromGraphDate, toGraphDate).then(
      (fetchedData) => {
        if (fetchedData) {
          let tmp = fetchedData.filter((data) => data.pnl !== null);
          btcLabels !== [] && setBtcLabels(['2017-01-01']);
          tmp
            .slice(0)
            .reverse()
            .forEach((data) =>
              setBtcLabels((btcLabels) => [
                ...btcLabels,
                data.signaltime.slice(0, 10),
              ]),
            );

          setBtcData(tmp);
          setBtcGraphData(calGraphData(tmp, money));
        }
      },
    );
  };
  const fetchEthData = async () => {
    await graphFetcher('ETHUSD', fromGraphDate, toGraphDate).then(
      (fetchedData) => {
        if (fetchedData) {
          let tmp = fetchedData.filter((data) => data.pnl !== null);
          ethLabels !== [] && setEthLabels(['2017-01-01']);
          tmp
            .slice(0)
            .reverse()
            .forEach((data) =>
              setEthLabels((ethLabels) => [
                ...ethLabels,
                data.signaltime.slice(0, 10),
              ]),
            );

          setEthData(tmp);
          setEthGraphData(calGraphData(tmp, money));
        }
      },
    );
  };
  const btcState = {
    labels: btcLabels,
    datasets: [
      {
        label: 'Qemistry Stealth Strategy',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#1F78B4',
        borderColor: '#1F78B4',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointBorderWidth: 0,
        pointHoverBackgroundColor: '#1F78B4',
        pointHoverBorderColor: '#1F78B4',
        pointHoverBorderWidth: 2,
        data: btcGraphData,
        hitRadius: 3,
      },
    ],
  };
  const ethState = {
    labels: ethLabels,
    datasets: [
      {
        label: 'Qemistry Stealth Strategy',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#1F78B4',
        borderColor: '#1F78B4',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointBorderWidth: 0,
        pointHoverBackgroundColor: '#1F78B4',
        pointHoverBorderColor: '#1F78B4',
        pointHoverBorderWidth: 2,
        data: ethGraphData,
        hitRadius: 3,
      },
    ],
  };

  useEffect(() => {
    fetchBtcData();
    fetchEthData();
    btcState.datasets[0].data = btcGraphData;
    btcState.datasets[0].data = ethGraphData;
  }, [fromGraphDate, toGraphDate, money, isBtc]);
  return (
    <div className={styles.graph}>
      {btcGraphData.length > 1 && ethGraphData.length > 1 && (
        <GraphContent btcState={btcState} ethState={ethState} isBtc={isBtc} />
      )}
    </div>
  );
};

export default Graph;
