import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'

const App = ({ singleData }) => {
  console.log(singleData)
  const { title, image, companyName, downloads, ratings } = singleData;

  const formatNumber = num => {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1) + 'B'; // Billion
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + 'M'; // Million
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + 'K'; // Thousand
    } else {
      return num.toString();
    }
  };
  
  return (
    <div className="card bg-base-100 shadow-lg p-5 ">
      <figure>
        <img className='rounded-[5px] ' src={image} alt="app" />
      </figure>
      <h2 className="my-3 font-semibold">
        {title}: {companyName}
      </h2>

      <div className="flex justify-between">
        <h3 className="flex font-semibold bg-[#F1F5E8] text-[#00D390] py-2 px-3 rounded-[4px] items-center">
          <img className="w-5 h-5 mr-2" src={downloadIcon} alt="" />
          {formatNumber(downloads)}
        </h3>
        <h3 className="flex font-semibold  bg-[#FFF0E1] text-[#FF8811] py-2 px-3 rounded-[4px] items-cente">
          <img className="w-5 h-5 mr-1" src={ratingIcon} alt="" />
          {ratings.length}
        </h3>
      </div>
    </div>
  );
};

export default App;