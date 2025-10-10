import React from 'react';
import logo from '../../assets/logo.png';


const SearchLoading = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center mt-3">
      <h1 className="text-4xl mb-3 font-bold text-[#001931]">Searching apps...</h1>
<br />
      <div className="w-20 h-20 animate-spin">
        <img src={logo} alt="" />
      </div>

    </div>
  );
};

export default SearchLoading;
