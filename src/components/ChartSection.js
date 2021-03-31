import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from 'scss/style.module.scss';
import images from 'assets/index';
import Graph from './Graph';
import dateFormat from 'utils/dateFormat';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import calendar from 'assets/calendar.png';

const ChartSection = () => {
  const today = new Date();
  const [fromDate, setFromDate] = useState({
    year: 2017,
    month: 1,
    day: 1,
  });
  const [toDate, setToDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  });
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [btcToggle, setBtcToggle] = useState(true);
  const [fromGraphDate, setFromGraphDate] = useState('2017-01-01');
  const [toGraphDate, setToGraphDate] = useState('2017-01-01');
  const [initialMoney, setInitialMoney] = useState(10000);
  const [showninitialMoney, setShownInitialMoney] = useState('10,000');
  const onToggle = (e) => {
    console.log(e);
    setBtcToggle(e === 'btc');
  };

  const toCustomInput = ({ ref }) => {
    return (
      <button
        ref={ref}
        className="flex justify-center items-center text-base font-bold text-darkBgColor bg-placeholder px-2 md:px-4 py-2 rounded-md hover:bg-mainBgColor"
      >
        {toDate.year}년 {toDate.month}월 {toDate.day}일
        <img src={calendar} alt="calendar" className="pl-4 md:pl-8" />
      </button>
    );
  };
  const fromCustomInput = ({ ref }) => {
    return (
      <button
        ref={ref}
        className="flex justify-center items-center text-base font-bold text-darkBgColor bg-placeholder px-2 md:px-4 py-2 rounded-md hover:bg-mainBgColor"
      >
        {fromDate.year}년 {fromDate.month}월 {fromDate.day}일
        <img src={calendar} alt="calendar" className="pl-4 md:pl-8" />
      </button>
    );
  };

  const onChangeMoney = (e) => {
    console.log(e.target.value);
    let x = e.target.value;
    x = x.replace(/[^0-9]/g, '');
    x = x.replace(/,/g, '');
    x = x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let n = parseInt(x.replace(/,/g, ''));
    setInitialMoney(n);
    setShownInitialMoney(x);
  };
  useEffect(() => {
    setFromGraphDate(dateFormat(fromDate));
    setToGraphDate(dateFormat(toDate));
  }, [fromDate, toDate]);
  return (
    <section
      className={cx(
        'flex justify-center items-center md:px-0',
        styles.fourthSection,
      )}
      id="strategy"
    >
      <div className="flex flex-col md:justify-between md:pt-16 sm:flex-row">
        <div className="flex justify-center">
          <Graph
            fromGraphDate={fromGraphDate}
            toGraphDate={toGraphDate}
            money={Number(initialMoney)}
            isBtc={btcToggle}
            isMobile={false}
          />
        </div>
        <br />
        <div className="flex flex-col text-2xl mt-2 md:mt-0 md:ml-8 md:text-3xl ">
          <div className="flex items-center">
            <p>If you have traded </p>
            <div className="md:ml-2">
              <select
                className="underline"
                onChange={(e) => onToggle(e.target.value)}
              >
                <option defaultValue value="btc">
                  BTCUSDT
                </option>
                <option value="eth">ETHUSD</option>
              </select>
            </div>
          </div>

          <div className="flex font-bold">
            <div className="flex underline">
              <p>$</p>
              <input
                type="text"
                value={showninitialMoney}
                className="inline-block bg-transparent font-bold border-0 focus:outline-none"
                onChange={onChangeMoney}
                maxLength="15"
                pattern="[0-9]+"
                size={initialMoney.toString().length + 1}
              />
            </div>
            <p> With Qemistry,</p>
          </div>

          <div className="flex justify-center  mt-8">
            <div className="mr-4 md:mr-10">
              <label className="text-darkBgColor font-bold text-base md:text-lg mb-3">
                From
              </label>
              <div>
                <DatePicker
                  value={fromDate}
                  onChange={setFromDate}
                  renderInput={fromCustomInput}
                  colorPrimary="#2958e5"
                />
              </div>
            </div>
            <div>
              <label className="text-darkBgColor font-bold text-base md:text-lg mb-3">
                To
              </label>

              <div>
                <DatePicker
                  value={toDate}
                  onChange={setToDate}
                  renderInput={toCustomInput}
                  colorPrimary="#2958e5"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-around mt-8 md:mt-10">
            <div>
              <p className={cx(styles.shadowText, 'font-bold mb-4')}>
                BUY ＆ HODL
              </p>
              <div className="flex">
                <div className="mr-4 md:mr-18">
                  <div className="flex items-start">
                    <p className={cx('font-light text-sm', styles.shadowText)}>
                      MDD
                    </p>
                    <img src={images.info} alt="info" />
                  </div>
                  <p className={cx(styles.shadowText, 'font-bold text-sm')}>
                    82%
                  </p>
                </div>
                <div>
                  <div className="flex items-start">
                    <p className={cx('font-light text-sm', styles.shadowText)}>
                      Return
                    </p>
                    <img src={images.info} alt="info" />
                  </div>
                  <p className={cx(styles.shadowText, 'text-sm font-bold')}>
                    250%
                  </p>
                </div>
              </div>
            </div>
            {/* 경계선 */}
            <div className="h-full w-px mx-6 md:mx-6 bg-placeholderBackgroundTwo  " />
            <div>
              <p className={cx(styles.shadowText, 'font-bold mb-4')}>
                With Qemistry
              </p>
              <div className="flex">
                <div className="mr-4 md:mr-18">
                  <div className="flex items-start">
                    <p className={cx(styles.shadowText, 'text-sm font-light ')}>
                      MDD
                    </p>
                    <img src={images.info} alt="info" />
                  </div>
                  <p className={cx(styles.shadowText, 'text-sm font-bold')}>
                    17%
                  </p>
                </div>
                <div>
                  <div className="flex items-start">
                    <p className={cx('text-sm font-light', styles.shadowText)}>
                      Return
                    </p>
                    <img src={images.info} alt="info" />
                  </div>
                  <p className={cx(styles.shadowText, 'text-sm font-bold')}>
                    2680%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="text-white bg-mainBlack text-lg font-bold border-0 rounded-md shadow-md mt-8 mx-16 px-20 py-4 focus:outline-none hover:bg-mainBlack hover:opacity-75">
            Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
