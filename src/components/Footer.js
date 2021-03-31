import React from 'react';
import Telegram from 'assets/Telegram.png';
import Medium from 'assets/Medium.png';
import Twitter from 'assets/Twitter.png';
import Youtube from 'assets/Youtube.png';

const Footer = () => {
  return (
    <div className="flex flex-wrap grid grid-cols-3 content-center h-48 w-full bg-mainGray">
      <div className="col-span-1"></div>
      <p className="col-span-1 mt-2 space-y-0 text-white text-center font-light text-sm tracking-wider">
        &copy; Copyright {new Date().getFullYear()} Qemistry. All rights
        reserved.
      </p>
      <div className="col-span-1 justify-center flex space-x-4">
        <a
          href="https://www.medium.com"
          className="hover:bg-mainBlack rounded-lg p-1"
        >
          <img src={Telegram} alt="social-telegram" />
        </a>
        <a
          href="https://www.medium.com"
          className="hover:bg-mainBlack rounded-lg p-1"
        >
          <img src={Medium} alt="social-medium" />
        </a>
        <a
          href="https://www.medium.com"
          className="hover:bg-mainBlack rounded-lg p-1"
        >
          <img src={Twitter} alt="social-twitter" />
        </a>
        <a
          href="https://www.medium.com"
          className="hover:bg-mainBlack rounded-lg p-1"
        >
          <img src={Youtube} alt="social-youtube" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
