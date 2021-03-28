import React from 'react';
import styles from 'scss/components/Footer.module.scss';
import Telegram from 'assets/Telegram.png';
import Medium from 'assets/Medium.png';
import Twitter from 'assets/Twitter.png';
import Youtube from 'assets/Youtube.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      &copy; Copyright {new Date().getFullYear()} Qemistry. All rights reserved.
      <div>
        <a href="https://www.medium.com">
          <img src={Telegram} alt="spcial-telegram" />
          <img src={Medium} alt="spcial-medium" />
          <img src={Twitter} alt="spcial-twitter" />
          <img src={Youtube} alt="spcial-youtube" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
