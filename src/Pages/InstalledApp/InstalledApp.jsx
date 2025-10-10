import React, { useEffect, useState } from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import {
  getInstalledApps,
  saveInstalledApps,
} from '../../LocalStorage/LocalStorage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InstalledApp = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    setInstalledApps(getInstalledApps());
  }, []);

  const handleSort = type => {
    setSort(type);
    let sortedApps = [...installedApps];
    if (type === 'High - Low') {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (type === 'Low - High') {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalledApps(sortedApps);
  };

  const handleUninstall = (id, title) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    saveInstalledApps(updated);

    toast.success(`${title} successfully uninstalled!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
  };

  const formatNumber = num => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="my-10">
      <ToastContainer />

      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#001931]">Installed Apps</h1>
        <p className="my-4 text-[#627382]">
          These are the apps you’ve installed
        </p>
      </div>

      <div className="flex items-center justify-between p-5">
        <p className="font-semibold">({installedApps.length}) Apps Found</p>

        <details className="dropdown">
          <summary className="btn m-1">Sort by: {sort ? sort : ''}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort('High - Low')}>High to Low</a>
            </li>
            <li>
              <a onClick={() => handleSort('Low - High')}>Low to High</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="p-5">
        {installedApps.map(app => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-white mb-3 p-3 rounded-lg shadow-sm"
          >
            {/* Left Side */}
            <div className="flex items-center">
              <img
                src={app.image}
                alt={app.title}
                className="h-18 mx-3 my-3 rounded-md"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {app.title}: {app.companyName}
                </h2>
                <div className="flex items-center gap-4">
                  <h3 className="flex font-semibold items-center text-[#00D390]">
                    <img className="w-4 h-4 mr-2" src={downloadIcon} alt="" />
                    {formatNumber(app.downloads)}
                  </h3>
                  <h3 className="flex font-semibold items-center text-[#FF8811]">
                    <img className="w-4 h-4 mr-1" src={ratingIcon} alt="" />
                    {app.ratings.length}
                  </h3>
                  <h3 className="text-[#627382]">{app.size} MB</h3>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="mr-2">
              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="bg-[#00D390] text-white px-4 py-2 rounded-md hover:bg-[#009264] transition"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApp;
