import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AllCards from '../AllCards/AllCards';

const All = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#001931]">Trending Apps</h1>
        <p className="my-4 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className='flex justify-between'>
        <p className='font-semibold'>({data.length}) Apps Found</p>
        <input className='border' placeholder='search Apps' type="search" name="" id="" />
      </div>

      <Suspense fallback={<p>loading...</p>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
          {data.map(singleData => (
            <AllCards key={singleData.id} singleData={singleData}></AllCards>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default All;
