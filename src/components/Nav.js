import React from 'react';
import styles from 'scss/components/Nav.module.scss';
import Logo from 'assets/Logo.png';
import Telegram from 'assets/Telegram.png';
import Medium from 'assets/Medium.png';
import Twitter from 'assets/Twitter.png';
import Youtube from 'assets/Youtube.png';
const Nav = () => {
  return (
    <div className={styles.navBar}>
      <div>
        <img src={Logo} className={styles.logo} alt="logo" />
        <p className={styles.name}>Qemistry</p>
      </div>
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

export default Nav;
