import React from 'react';

const Headline = ({ title, description }) => {
  return (
    <div className="mt-4 shadow-xl bg-gray-800 rounded-md p-6 md:p-8 lg:p-10">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">{title}</h3>
      <p className="mt-2 text-base md:text-10px lg:text-xl text-gray-300">{description}</p>
    </div>
  );
};

export default Headline;