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
      <section className={styles.firstSection} id="waitList">
        <div className={styles.container}>
          <div className={cx(styles.title, styles.firstOfTitle)}>
            <p>
              Investment Made Easy
              <br />
              <b>
                Trade WIth The <u>Logics</u>
              </b>
            </p>
            <p className={styles.description}>
              A to Z Service sith the Quantative Analysis
            </p>

            <div className={cx(styles.landingVideo, styles.landingVideoMobile)}>
              <video autoPlay loop muted>
                <source src={images.landingVideo} type="video/mp4" />
              </video>
            </div>

            <form onSubmit={onSubmit}>
              <input placeholder="name" type="text" />
              <br />
              <input placeholder="Email" type="email" />
              <br />
              <input
                type="submit"
                className={styles.submitBtn}
                value="Join Waitlist"
              />
            </form>
          </div>
          <div className={cx(styles.landingVideo, styles.landingVideoDesktop)}>
            <video autoPlay loop muted>
              <source src={images.landingVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Section2 */}
      <section className={styles.secondSection} id="service">
        <div className={styles.container}>
          <img src={images.chartMonitor} alt="chart-monitor" />
          <div className={styles.title}>
            <p>
              Full Integration with Trading View
              <br />
              <b>Intuitive Visualization</b>
            </p>
            <p className={styles.description}>
              <img
                src={images.chartMonitor}
                alt="chart-monitor"
                className={styles.chartMonitor}
              />
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
        <div className={styles.container}>
          <div className={styles.title}>
            <p>
              Funds on You, Trade Bots for You
              <br />
              <b>Effortless Easy Come</b>
            </p>

            <p className={styles.description}>
              - 5+ Exchanges Supported
              <br />
              <br /> - We don’t have any access to your funds:
              <br />
              Order Processing Only
              <br />
              <br />- 24/7 Live Bots with the Instant Processing
            </p>
          </div>
          <div className={cx(styles.companies, styles.companiesNotMobile)}>
            <div className={styles.flatten}>
              <img
                src={images.binace}
                alt="companies"
                className={styles.company}
              />
              <img
                src={images.bithumb}
                alt="companies"
                className={styles.company}
              />
              <img
                src={images.upbit}
                alt="companies"
                className={styles.company}
              />
            </div>
            <div className={styles.flatten}>
              <img
                src={images.bitget}
                alt="companies"
                className={styles.company}
              />
              <img
                src={images.bybit}
                alt="companies"
                className={styles.company}
              />
              <img
                src={images.huobi}
                alt="companies"
                className={styles.company}
              />
            </div>
            <div className={styles.flatten}>
              <img src={images.plus} alt="plus-mark" />
              <p>More Supported Exchanges</p>
            </div>
          </div>
          <div className={cx(styles.companies, styles.companiesMobile)}>
            <div className={styles.flatten}>
              <img
                src={images.binace}
                alt="companies"
                className={styles.company}
              />
              <img
                src={images.bithumb}
                alt="companies"
                className={styles.company}
              />
            </div>
            <div className={styles.flatten}>
              <img
                src={images.upbit}
                alt="companies"
                className={styles.company}
              />
              <img
                src={images.bitget}
                alt="companies"
                className={styles.company}
              />
            </div>
            <div className={styles.flatten}>
              <img
                src={images.bybit}
                alt="companies"
                className={styles.company}
              />
              <img
                src={images.huobi}
                alt="companies"
                className={styles.company}
              />
            </div>
            <div className={styles.flatten}>
              <img src={images.plus} alt="plus-mark" />
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
