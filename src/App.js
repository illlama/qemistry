import React from 'react';
import Nav from 'components/Nav';
import cx from 'classnames';
import styles from 'scss/style.module.scss';
import images from 'assets/index';

const App = () => {
  const onSubmit = () => {};
  return (
    <div>
      <Nav />

      {/* Section1 */}
      <section className={styles.firstSection}>
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
          <div className={styles.landingVideo}>
            <video autoPlay loop muted>
              <source src={images.landingVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Section2 */}
      <section className={styles.secondSection}>
        <div className={styles.container}>
          <img src={images.chartMonitor} alt="chart-monitor" />
          <div className={styles.title}>
            <p>
              Full Integration with Trading View
              <br />
              <b>Intuitive Visualization</b>
            </p>
            <p className={styles.description}>
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
      <section className={styles.thirdSection}>
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
          <div className={styles.companies}>
            <div className={styles.flatten}>
              <img src={images.binace} alt="companies" />
              <img src={images.bithumb} alt="companies" />
              <img src={images.upbit} alt="companies" />
            </div>
            <div className={styles.flatten}>
              <img src={images.bitget} alt="companies" />
              <img src={images.bybit} alt="companies" />
              <img src={images.huobi} alt="companies" />
            </div>
            <div className={styles.flatten}>
              <img src={images.plus} alt="plus-mark" />
              <p>More Supported Exchanges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section4 */}
      <section className={styles.fourthSection}>
        <div className={styles.container}>
          <div className={styles.title}>fourth</div>
        </div>
      </section>

      {/* Section5 */}
      <section className={styles.fifthSection}>
        <div className={styles.container}>
          <div className={styles.title}>fifth</div>
        </div>
      </section>
    </div>
  );
};

export default App;
