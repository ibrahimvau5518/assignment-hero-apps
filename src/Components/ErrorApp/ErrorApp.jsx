import React from 'react';
import appError from '../../assets/App-Error.png'
import { Link } from 'react-router';

const ErrorApp = () => {
  return (
    <div className="mx-auto my-10 max-w-200 flex flex-col items-center text-center justify-center ">
      <img className="" src={appError} alt="" />
      <h1 className="text-3xl font-semibold mt-10">OPPS!! APP NOT FOUND</h1>
      <p className="m-3 text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link to="/">
        <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
          Go Back!
        </a>
      </Link>
    </div>
  );
};

export default ErrorApp;