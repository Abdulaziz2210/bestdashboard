import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { HiShoppingBag } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { IoMdClock } from "react-icons/io";

const TimeLine = () => {
  const [currentTime, setCurrentTime] = useState('');

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getFullDate = () => {
    const date = new Date();
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getCurrentTime());
    };

    updateTime(); // Initial call
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 ">
      <Card title="Total Products" description="124" icon={<HiShoppingBag />} />
      <Card title="Total Admins" description="1" icon={<ImUsers />} />
      <Card title="Today's Date" description={getFullDate()} icon={<FaCalendarAlt />} />
      <Card title="Current Time" description={currentTime} icon={<IoMdClock />} />
    </div>
  );
};

export default TimeLine;