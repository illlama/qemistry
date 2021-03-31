import { MOBILE_WIDTH } from 'constants/device';
import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';

const GraphContent = ({ btcData, ethData, isBtc }) => {
  let isMobile = window.innerWidth < MOBILE_WIDTH ? true : false;
  return (
    <div>
      <AreaChart
        width={isMobile ? 350 : 650}
        height={isMobile ? 320 : 470}
        data={isBtc ? btcData : ethData}
        margin={isMobile ? '' : { top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="1%" stopColor="#8D9198" stopOpacity={0.8} />
            <stop offset="99%" stopColor="#8D9198" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="date"
          width={0}
          tickLine={false}
          axisLine={{ stroke: 0 }}
          stroke="#525D6B"
          tick={{ fontSize: 10 }}
          minTickGap={5}
        />
        <YAxis
          orientation="right"
          tickLine={false}
          axisLine={{ stroke: 0 }}
          tickCount={5}
          stroke="#525D6B"
          tick={{ fontSize: 10 }}
        />
        <CartesianGrid width={0} />
        <Tooltip
          cursor={{ stroke: '#8D9198', strokeWidth: 1 }}
          formatter={(res, name) => ['$' + res]}
          labelStyle={{ color: '#ffffff', fontSize: '14px' }}
          itemStyle={{ color: '#ffffff' }}
          contentStyle={{ backgroundColor: '#525D6B', border: '#525D6B' }}
        />

        <Area
          type="monotone"
          dataKey="res"
          stroke="#8D9198"
          fillOpacity={1}
          fill="url(#colorPv)"
          strokeWidth={2}
        />
      </AreaChart>
    </div>
  );
};

export default React.memo(GraphContent);
