import React, { useState } from 'react';
import styles from 'scss/components/Nav.module.scss';
import Logo from 'assets/Logo.png';
import SimpleLogo from 'assets/simpleLogo.png';
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
    <div className="fixed inset-x-0 top-0 flex justify-between h-15 px-10 pt-3 bg-white">
      <div>
        {isTop ? (
          <img src={Logo} className="h-12 ml-6 mt-1" alt="logo" />
        ) : (
          <img
            src={SimpleLogo}
            className={cx('ml-5 h-12 ', {
              [styles.simpleLogo]: !isTop,
            })}
            alt="logo"
          />
        )}
      </div>
      <div>
        <ul className="flex content-center h-15 mr-12 text-placeholderBackgroundTwo text-2xl ">
          <a href="#waitList">
            <li className="mx-4 transition ease-in-out hover:text-mainBlue duration-100">
              Wait List
            </li>
          </a>
          <a href="#service">
            <li className="mx-4 transition ease-in-out hover:text-mainBlue duration-100">
              Service
            </li>
          </a>
          <a href="#support">
            <li className="mx-4 transition ease-in-out hover:text-mainBlue duration-100">
              Support
            </li>
          </a>
          <a href="#strategy">
            <li className="mx-4 transition ease-in-out hover:text-mainBlue duration-100">
              Strategy
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
