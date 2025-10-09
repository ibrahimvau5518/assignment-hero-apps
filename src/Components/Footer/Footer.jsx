import React from 'react';
import homeio from '../../assets/logo.png';
import twitterLogo from '../../assets/twitter.png';
import linkInLogo from '../../assets/linkedIn.png';
import fbLogo from '../../assets/fb.png';

const Footer = () => {
  return (
    <footer className="p-10 bg-[#001931] text-white">
      <div className="flex flex-col lg:flex-row justify-evenly items-start lg:items-center gap-10">

        <div className="flex items-center gap-3">
          <img className="w-10 h-10" src={homeio} alt="Home.IO Logo" />
          <h2 className="font-bold text-xl">HOME.IO</h2>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#apps" className="hover:text-blue-400 transition">
                Apps
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

       

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-3">
            <img
              className="w-6 h-6 hover:scale-110 transition-transform"
              src={twitterLogo}
              alt="Twitter"
            />
            <img
              className="w-6 h-6 hover:scale-110 transition-transform"
              src={linkInLogo}
              alt="LinkedIn"
            />
            <img
              className="w-6 h-6 hover:scale-110 transition-transform"
              src={fbLogo}
              alt="Facebook"
            />
          </div>
        </div>
      </div>

      <hr className="my-5 opacity-30" />

      <div className="text-center text-sm">
        <small>© 2025 HOME.IO - All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
