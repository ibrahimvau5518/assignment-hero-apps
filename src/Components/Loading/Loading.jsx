// Loading.jsx
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-router';
import logo from '../../assets/logo.png'

const Loading = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  
    if (navigation.state === 'loading') {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }

  }, [navigation.state]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex flex-col-reverse items-center justify-center bg-white bg-opacity-60 z-50 transition-opacity duration-500">
      <h1 className="text-5xl font-bold text-[#001931]">Loading...</h1>
      <br />
      <div className="w-20 h-20 animate-spin">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Loading;
