import React, { useState } from 'react';
import styles from 'scss/components/Nav.module.scss';
import Logo from 'assets/Logo.png';
import Telegram from 'assets/Telegram.png';
import Medium from 'assets/Medium.png';
import Twitter from 'assets/Twitter.png';
import Youtube from 'assets/Youtube.png';
import cx from 'classnames';

const Nav = () => {
  const [isTop, setIsTop] = useState(true);
  window.onscroll = () => {
    shrinkLogo();
  };
  const shrinkLogo = () => {
    if (
      document.body.scrollTop > 120 ||
      document.documentElement.scrollTop > 120
    ) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };
  return (
    <div className={styles.navBar}>
      <div>
        <img
          src={Logo}
          className={cx(styles.logo, { [styles.shrink]: !isTop })}
          alt="logo"
        />
        <p className={cx(styles.name, { [styles.shrink]: !isTop })}>Qemistry</p>
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
