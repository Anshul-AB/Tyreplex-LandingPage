import React from 'react';

const MainCard = ({ title, children }) => {
  return (
    <div className='bg-white shadow-md rounded-md m-2 p-4 md:p-6 lg:p-8'>
      <div className='font-semibold text-lg mb-4'>{title}</div>
      {children}
    </div>
  );
}

export default MainCard;
