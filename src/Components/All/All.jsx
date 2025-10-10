import React, { Suspense, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AllCards from '../AllCards/AllCards';
import { CiSearch } from 'react-icons/ci';
import Loading from '../Loading/Loading';
import SearchLoading from '../SearchLoading/SearchLoading';

const All = () => {
  const data = useLoaderData();
  const [searchData, setSearchData] = useState('');
  const [filteredApps, setFilteredApps] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchData.trim()) {
      setFilteredApps(data);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const searchDelay = setTimeout(() => {
      const filtered = data.filter(app =>
        app.title.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilteredApps(filtered);

      setTimeout(() => setIsLoading(false), 200);
    }, 300);

    return () => clearTimeout(searchDelay);
  }, [searchData, data]);

  return (
    <div className="my-10 relative">
      {/* {isLoading && <Loading show={isLoading} />} */}

      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#001931]">Trending Apps</h1>
        <p className="my-4 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex items-center justify-between p-5">
        <p className="font-semibold">({filteredApps.length}) Apps Found</p>
        <div className="relative items-center">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            className="border border-[#D2D2D2] pl-8 pr-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="search Apps"
            type="search"
            value={searchData}
            onChange={e => setSearchData(e.target.value)}
          />
        </div>
      </div>

      {isLoading && <SearchLoading/>}

      {!isLoading && (
        <>
          {filteredApps.length > 0 ? (
            <Suspense fallback={<p className='text-8xl text-black'>Loading...</p>}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
                {filteredApps.map(singleData => (
                  <AllCards key={singleData.id} singleData={singleData} />
                ))}
              </div>
            </Suspense>
          ) : (
            <div className="text-center text-2xl font-semibold my-10">
              <h1 className="text-4xl mb-10">No Apps Found</h1>
              <Link to="/apps">
                  <button
                    className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
                    onClick={() => {
                      setSearchData('');
                      setFilteredApps(data);
                    }}
                  >
                  Show All
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default All;
