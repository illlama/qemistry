import React, { useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import DayPicker from 'react-day-picker';
import styles from 'scss/style.module.scss';
import images from 'assets/index';
import Graph from './Graph';
import dateFormat from 'utils/dateFormat';

const ChartSection = () => {
  const dropDownRef = useRef();
  const [fromInfo, setFromInfo] = useState({
    year: 2017,
    month: 1,
    date: 1,
  });
  const [toInfo, setToInfo] = useState({
    year: 2021,
    month: 1,
    date: 1,
  });
  const [fromDate, setFromDate] = useState(
    new Date('January 1, 2017 03:24:00'),
  );
  const [showFrom, setShowFrom] = useState(false);
  const [toDate, setToDate] = useState(new Date());
  const [showTo, setShowTo] = useState(false);
  const [btcToggle, setBtcToggle] = useState(true);
  const [fromGraphDate, setFromGraphDate] = useState('');
  const [toGraphDate, setToGraphDate] = useState('');
  const [initialMoney, setInitialMoney] = useState(10000);
  const [showninitialMoney, setShownInitialMoney] = useState('10,000');
  const onToggle = () => {
    setBtcToggle((prev) => !prev);
  };
  const showCalendar = (e) => {
    e.preventDefault();
    if (e.target.name === 'From') {
      setShowFrom((prev) => !prev);
    } else if (e.target.name === 'To') {
      setShowTo((prev) => !prev);
    }
  };
  const onFromPick = (e) => {
    if (e === fromDate) {
      setFromDate(undefined);
    } else {
      setFromDate(e);
      setShowFrom(false);
    }
  };
  const onToPick = (e) => {
    if (e === fromDate) {
      setToDate(undefined);
    } else {
      setToDate(e);
      setShowTo(false);
    }
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
    setFromInfo({
      year: fromDate.getFullYear(),
      month: fromDate.getMonth() + 1,
      date: fromDate.getDate(),
    });
    setToInfo({
      year: toDate.getFullYear(),
      month: toDate.getMonth() + 1,
      date: toDate.getDate(),
    });
    setFromGraphDate(dateFormat(fromDate));
    setToGraphDate(dateFormat(toDate));
  }, [fromDate, toDate]);
  return (
    <section className={styles.fourthSection} id="strategy">
      <div className={styles.container}>
        <Graph
          fromGraphDate={fromGraphDate}
          toGraphDate={toGraphDate}
          money={Number(initialMoney)}
          isBtc={btcToggle}
          isMobile={false}
        />
        <div className={styles.title}>
          <div className={styles.exchangeSetting}>
            <p>If you have traded </p>
            <div className={styles.dropDown}>
              <ul className={styles.itemList}>
                <li
                  className={cx(styles.item, {
                    [styles.onDropdown]: !btcToggle,
                  })}
                >
                  <u>BTCUSDT</u>
                </li>
                <li
                  className={cx(styles.item, {
                    [styles.onDropdown]: btcToggle,
                  })}
                >
                  <u>ETHUSD</u>
                </li>
              </ul>
            </div>
            <button ref={dropDownRef} onClick={onToggle}>
              <img src={images.pullDown} alt="DropDownIcon" />
            </button>
          </div>
          <b>
            <b>
              <div className={styles.inputMoneyContainer}>
                <p>$</p>
                <input
                  type="text"
                  value={showninitialMoney}
                  className={styles.inputMoney}
                  onChange={onChangeMoney}
                  maxLength="15"
                  pattern="[0-9]+"
                  size={initialMoney.toString().length + 1}
                />
                <p> With Qemistry,</p>
              </div>
            </b>
          </b>
          <div className={styles.data}>
            <div>
              <label>From</label>
              <button
                onClick={showCalendar}
                className={styles.datePickBtn}
                name="From"
              >
                {fromInfo.year}년 {fromInfo.month}월 {fromInfo.date}일
                <img name="From" src={images.calendar} alt="calendar" />
              </button>
              <div>
                {showFrom && (
                  <DayPicker
                    onDayClick={onFromPick}
                    selectedDays={fromDate}
                    className={styles.dayPicker}
                    month={fromDate}
                  />
                )}
              </div>
            </div>
            <div className={styles.toDateContainer}>
              <label>To</label>
              <button
                onClick={showCalendar}
                className={styles.datePickBtn}
                name="To"
              >
                {toInfo.year}년 {toInfo.month}월 {toInfo.date}일
                <img name="To" src={images.calendar} alt="calendar" />
              </button>
              <div>
                {showTo && (
                  <DayPicker
                    onDayClick={onToPick}
                    selectedDays={toDate}
                    className={styles.dayPicker}
                    month={toDate}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.dataRes}>
            <div>
              <p className={styles.resTitle}>BUY ＆ HODL</p>
              <div className={styles.resBox}>
                <div>
                  <p>MDD</p>
                  <img src={images.info} alt="info" />
                </div>
                <p>82%</p>
              </div>
              <div className={styles.resBox}>
                <div>
                  <p>Return</p>
                  <img src={images.info} alt="info" />
                </div>
                <p>250%</p>
              </div>
            </div>
            <div className={styles.resHr}></div>
            <div>
              <p className={styles.resTitle}>With Qemistry</p>
              <div className={styles.resBox}>
                <div>
                  <p>MDD</p>
                  <img src={images.info} alt="info" />
                </div>
                <p>17%</p>
              </div>
              <div className={styles.resBox}>
                <div>
                  <p>Return</p>
                  <img src={images.info} alt="info" />
                </div>
                <p>2680%</p>
              </div>
            </div>
          </div>
          <button className={styles.pricing}>Pricing</button>
        </div>
        <br />
      </div>
    </section>
  );
};

export default ChartSection;
