import { MOBILE_WIDTH } from 'constants/device';
import React from 'react';
import { Line } from 'react-chartjs-2';

const GraphContent = ({ btcState, ethState, isBtc }) => {
  let isMobile = window.innerWidth < MOBILE_WIDTH ? true : false;
  return (
    <div>
      <Line
        data={isBtc ? btcState : ethState}
        width={isMobile ? 300 : 450}
        height={isMobile ? 320 : 470}
        options={{
          responsive: true,
          title: {
            display: true,
            fontSize: 20,
          },
          tooltips: {
            titleFontFamily: 'Montserrat',
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 10,
              fontSize: 10,
              fontColor: '#363636',
              fontFamily: 'Montserrat',
            },
          },
          scales: {
            yAxes: [
              {
                stacked: true,
                gridLines: {
                  color: '#F0F0F0',
                  zeroLineColor: '#F0F0F0',
                },
                ticks: {
                  fontFamily: 'Montserrat',
                  fontSize: 10,
                  fontColor: '#a3a3a3',
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  color: '#F0F0F0',
                  zeroLineColor: '#F0F0F0',
                },
                ticks: {
                  beginAtZero: true,
                  fontFamily: 'Montserrat',
                  fontSize: 10,
                  fontColor: '#a3a3a3',
                  autoSkip: true,
                  maxRotation: 0,
                  autoSkipPadding: 40,
                },
                distribution: 'linear',
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default React.memo(GraphContent);
