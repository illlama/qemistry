import React, { useState } from 'react';
import Nav from 'components/Nav';
import cx from 'classnames';
import styles from 'scss/style.module.scss';
import images from 'assets/index';
import Footer from 'components/Footer';
import ChartSection from 'components/ChartSection';

const App = () => {
  const onSubmit = () => {};

  return (
    <div>
      <Nav />
      {/* Section1 */}
      <section id="waitList">
        <div className={cx('flex justify-between', styles.container)}>
          <div className="flex flex-col place-content-stretch mt-36 text-3xl">
            <p>
              Investment Made Easy
              <br />
              <b>
                Trade WIth The <u>Logics</u>
              </b>
            </p>

            <p className="text-lg my-auto">
              A to Z Service sith the Quantative Analysis
            </p>

            <video
              autoPlay
              loop
              muted
              className="w-3/5 lg:hidden mt-36 flex-none"
            >
              <source src={images.landingVideo} type="video/mp4" />
            </video>

            <form onSubmit={onSubmit}>
              <input
                placeholder="name"
                type="text"
                className="bg-mainBgColor rounded-lg font-bold border-0 focus:outline-none text-mainBlue text-lg p-4 mb-2 lg:text-xl"
              />
              <br />
              <input
                placeholder="Email"
                type="email"
                className="w-full bg-mainBgColor rounded-lg font-bold border-0 focus:outline-none text-mainBlue text-lg p-4 mb-2 lg:text-xl"
              />
              <br />
              <input
                type="submit"
                value="Join Waitlist"
                className="float-right bg-darkBgColor rounded-lg font-bold border-0 hover:opacity-75 text-white text-lg p-4 mb-2 cursor-pointer lg:text-xl"
              />
            </form>
          </div>

          <video
            autoPlay
            loop
            muted
            className="w-2/3 hidden lg:inline-block mt-36 "
          >
            <source src={images.landingVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Section2 */}
      <section className={styles.secondSection} id="service">
        <div
          className={cx(
            'grid grid-cols-2 flex justify-center',
            styles.container,
          )}
        >
          <img
            src={images.chartMonitor}
            alt="chart-monitor"
            className="w-1/3 col-span-1 hidden lg:inline-block mr-8"
          />
          <div className="col-span-1 ml-8">
            <p className="text-3xl mb-12">
              Full Integration with Trading View
              <br />
              <b>Intuitive Visualization</b>
            </p>
            <img
              src={images.chartMonitor}
              alt="chart-monitor"
              className="lg:hidden"
            />
            <p className={styles.shadowDescription}>
              - Live Alerts via Telegram
              <br />
              <br />- 3-Year proven strategies
              <br />
              <br />
              -Customized Strategies with Different Time Frames and Pairs
            </p>
          </div>
        </div>
      </section>

      {/* Section3 */}
      <section className={styles.thirdSection} id="support">
        <div
          className={cx('flex justify-evenly md:grid-cols-2', styles.container)}
        >
          <div className="md:col-span-1">
            <p className="text-3xl mb-12">
              Funds on You, Trade Bots for You
              <br />
              <b>Effortless Easy Come</b>
            </p>

            <p className={styles.shadowDescription}>
              - 5+ Exchanges Supported
              <br />
              <br /> - We don’t have any access to your funds:
              <br />
              Order Processing Only
              <br />
              <br />- 24/7 Live Bots with the Instant Processing
            </p>
          </div>
          <div className="mt-24 md:inline-block md:col-span-1">
            <div className="flex justify-center content-center">
              <img
                src={images.binace}
                alt="companies"
                className="px-3 object-none"
              />
              <img
                src={images.bithumb}
                alt="companies"
                className="px-3 object-none"
              />
              <img
                src={images.upbit}
                alt="companies"
                className="px-3 object-none"
              />
            </div>
            <div className="flex justify-center content-center">
              <img
                src={images.bitget}
                alt="companies"
                className="px-3 object-none"
              />
              <img
                src={images.bybit}
                alt="companies"
                className="px-3 object-none"
              />
              <img
                src={images.huobi}
                alt="companies"
                className="px-3 object-none"
              />
            </div>
            <div className="flex justify-center content-center text-base">
              <img src={images.plus} alt="plus-mark" className="mr-4" />
              <p>More Supported Exchanges</p>
            </div>
          </div>
          <div className="mt-24 md:hidden md:col-span-1">
            <div className="flex justify-center content-center">
              <img
                src={images.binace}
                alt="companies"
                className="px-3 object-none"
              />
              <img
                src={images.bithumb}
                alt="companies"
                className="px-3 object-none"
              />
            </div>
            <div className="flex justify-center content-center">
              <img
                src={images.upbit}
                alt="companies"
                className="px-3 object-none"
              />
              <img
                src={images.bitget}
                alt="companies"
                className="px-3 object-none"
              />
            </div>
            <div className="flex justify-center content-center">
              <img
                src={images.bybit}
                alt="companies"
                className="px-3 object-none"
              />
              <img
                src={images.huobi}
                alt="companies"
                className="px-3 object-none"
              />
            </div>
            <div className="flex justify-center content-center text-base">
              <img src={images.plus} alt="plus-mark" className="mr-4" />
              <p>More Supported Exchanges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section4 */}
      <ChartSection />

      {/* Section5 */}
      <section className={styles.fifthSection}>
        <div className={styles.fifthContainer}>
          <div className={styles.fifthTitle}>
            <p>Optimized Strategies</p>
            <br />
            <p>for 23+ Pairs</p>
          </div>
          <button className={styles.detailsBtn}>View Details</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
