import React, { Suspense } from 'react';
import App from '../../Components/App/App';
import { Link } from 'react-router';



const Apps = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#001931]">Trending Appsss</h1>
        <p className="my-4 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <Suspense fallback={<p>loading...</p>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.map(singleData => (
            <App key={singleData.id} singleData={singleData}></App>
          ))}
        </div>

        <div className="flex justify-center mt-5 mb-10">
          <Link to="/apps">
            <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
              Show All
            </button>
          </Link>
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;