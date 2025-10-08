import React from 'react';
import heroImage from '../../assets/hero.png'
import googleImage from '../../assets/google.png'
import appleImage from '../../assets/appleImg.png'

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-5xl mb-5 font-semibold">
          We Build <br />
          <span className="font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
            Productive
          </span>{' '}
          Apps
        </h1>
        <p className='p-5'>
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center m-5 gap-5 p-5">
        <button className="flex items-center border border-gray-200 rounded-[4px] p-3 font-semibold">
          <img className="w-8 h-8 mr-2" src={googleImage} alt="" /> Google Play
        </button>

        <button className="flex items-center border border-gray-200 rounded-[4px] p-3 font-semibold">
          <img className="w-8 h-8 mr-2" src={appleImage} alt="" /> Apple Store
        </button>
      </div>
      <div className="flex justify-center">
        <img className="w-2/3" src={heroImage} alt="" />
      </div>
      <div className="text-center text-white mb-10 p-10 bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
        <h1 className="text-4xl font-medium">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-20 my-10">
          <div>
            <p>Total Downloads</p>
            <h1 className="text-5xl my-2 font-bold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className="text-5xl my-2 font-bold">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className="text-5xl my-2 font-bold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;