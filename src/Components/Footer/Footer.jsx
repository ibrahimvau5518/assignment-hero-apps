import React from 'react';
import homeio from '../../assets/logo.png'
import twitterLogo from '../../assets/twitter.png'
import linkInLogo from '../../assets/linkedIn.png'
import fbLogo from '../../assets/fb.png'


const Footer = () => {
  return (
    <div className=" p-10 bg-[#001931] text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="w-9 h-9" src={homeio} alt="" />
          <h2 className="font-semibold">HOME.IO</h2>
        </div>
        <div>
          <h1 className="mb-2">Social Links</h1>
          <div className="flex gap-3">
            <img src={twitterLogo} alt="" />
            <img src={linkInLogo} alt="" />
            <img src={fbLogo} alt="" />
          </div>
        </div>
      </div>
      <hr className="my-5 opacity-20" />
      <div className="text-center">
        <small>Copyright © 2025 - All right reserved</small>
      </div>
    </div>
  );
};

export default Footer;