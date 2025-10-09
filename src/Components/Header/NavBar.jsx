import React from 'react';
import gitLogo from '../../assets/gitLogo.png';
import homeio from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? 'm-2 font-semibold text-[#632EE3] border-b-2 border-[#632EE3]'
            : 'm-2 font-semibold text-gray-700 hover:text-[#632EE3]'
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          isActive
            ? 'm-2 font-semibold text-[#632EE3] border-b-2 border-[#632EE3]'
            : 'm-2 font-semibold text-gray-700 hover:text-[#632EE3]'
        }
      >
        <li>Apps</li>
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) =>
          isActive
            ? 'm-2 font-semibold text-[#632EE3] border-b-2 border-[#632EE3]'
            : 'm-2 font-semibold text-gray-700 hover:text-[#632EE3]'
        }
      >
        <li>Installation</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar px-5 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <li className="flex gap-2 font-bold  items-center text-xl bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            <img className="w-8 h-8" src={homeio} alt="" />
            HERO.IO
          </li>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
          <img src={gitLogo} alt="" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default NavBar;
