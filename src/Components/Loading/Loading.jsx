// Loading.jsx
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-router';
import logo from '../../assets/logo.png'

const Loading = ({ show: manualShow = null, delay = 500 }) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;

    // ✅ যদি manualShow explicitly দেওয়া থাকে, ওটাই priority
    if (manualShow !== null) {
      setIsVisible(manualShow);
      return;
    }

    // ✅ otherwise, route navigation অনুযায়ী loading দেখাবে
    if (navigation.state === 'loading') {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => setIsVisible(false), delay);
    }

    return () => clearTimeout(timer);
  }, [navigation.state, manualShow, delay]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex flex-col-reverse items-center justify-center bg-white bg-opacity-60 z-50 transition-opacity duration-500">
      <h1 className="text-4xl font-bold text-[#001931]">Loading...</h1>
      <br />
      <div className="w-16 h-16 animate-spin">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Loading;
