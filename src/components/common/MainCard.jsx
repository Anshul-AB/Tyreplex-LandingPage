import React from 'react'

const MainCard = ({title, children}) => {
  return (
    <div className='bg-white drop-shadow-md rounded-md m-2 pb-10'>
      <div className='font-semibold text-lg p-5'>{title}</div>
      {children}
    </div>
  )
}

export default MainCard
