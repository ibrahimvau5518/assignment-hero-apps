import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './AppDetails.css';
import {
  getInstalledApps,
  saveInstalledApps,
} from '../../LocalStorage/LocalStorage';
import { toast, ToastContainer } from 'react-toastify';

const AppDetails = () => {
  const { id } = useParams();
  // console.log(id)
  const appId = parseInt(id);
  const data = useLoaderData();
  // console.log(data)
  const singleApp = data.find(app => app.id === appId);
  // console.log(singleApp);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingApps = getInstalledApps();
    const alreadyInstalled = existingApps.some(app => app.id === appId);
    setIsInstalled(alreadyInstalled);
  }, [appId]);

  const handleInstall = () => {
    const existingApps = getInstalledApps();
    const alreadyInstalled = existingApps.find(app => app.id === appId);

    if (!alreadyInstalled) {
      const updatedApps = [...existingApps, singleApp];
      saveInstalledApps(updatedApps);
      setIsInstalled(true);
      toast.success(`${title} installed successfully!`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const {
    title,
    image,
    companyName,
    ratings,
    downloads,
    reviews,
    size,
    description,
  } = singleApp;

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
    <div className=" my-10 p-10">
      <ToastContainer></ToastContainer>

      <div className="flex flex-col lg:flex-row gap-8 p-3">
        <img className="shadow-lg w-70 h-70" src={image} alt="" />
        <div className="max-w-200">
          <div className="">
            <h3 className="font-semibold text-2xl">
              {title}: {companyName}
            </h3>
            <p className="text-[#627382]">
              Developed by{' '}
              <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                productive.io
              </span>
            </p>
            <hr className="my-5 border-t-[#627382] opacity-50" />
          </div>
          <div className="flex justify-between ">
            <div className=" p-3">
              <img src={downloadIcon} alt="" />
              <p>Downloads</p>
              <h1 className="text-3xl font-bold">{formatNumber(downloads)}</h1>
            </div>
            <div className=" p-3">
              <img src={ratingIcon} alt="" />
              <p>Ratings</p>
              <h1 className="text-3xl font-bold">{ratings.length}</h1>
            </div>
            <div className=" p-3">
              <img src={reviewIcon} alt="" />
              <p>Reviews</p>
              <h1 className="text-3xl font-bold">{formatNumber(reviews)}</h1>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-3 relative overflow-hidden px-6 py-3 rounded-xl font-bold transition ${
              isInstalled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#00D390] text-white hover:bg-[#00b67a]'
            }`}
          >
            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}

            {!isInstalled && (
              <span
                className="absolute top-[-50%] left-[-70%] w-3/4 h-200 
        bg-gradient-to-r from-white/0 via-white/70 to-white/0 
        transform rotate-12 animate-shine"
              ></span>
            )}
          </button>
        </div>
      </div>

      <hr className="my-10 border-t-[#627382] opacity-50" />

      <div className="space-y-3">
        <h1 className="text-black font-semibold text-2xl">Ratings</h1>
        <div className="p-5 h-70">
          <ResponsiveContainer>
            <BarChart layout="vertical" data={ratings.slice().reverse()}>
              <XAxis type="number" axisLine={false} tickLine={false}></XAxis>
              <YAxis
                type="category"
                axisLine={false}
                tickLine={false}
                dataKey="name"
              ></YAxis>
              <Bar dataKey="count" fill="#FF8811"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <hr className="my-10 border-t-[#627382] opacity-50" />

      <div>
        <h1 className="text-black font-semibold text-2xl">Description</h1>
        <br />
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
