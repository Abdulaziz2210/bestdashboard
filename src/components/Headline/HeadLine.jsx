import React from 'react';

const Headline = ({ title, description }) => {
  return (
    <div className="mt-2 shadow-xl bg-[#444444] rounded-sm p-4 text-white">
      <h1 className="flex justify-start font-semibold">{title}</h1>
      <p className=" text-lg">{description}</p>
    </div>
  );
};

export default Headline;