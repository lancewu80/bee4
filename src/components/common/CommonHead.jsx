import React from 'react'

const CommonHead = ({head , text}) => {
  return (
    <div>
      <h2 className=' text-headText md:text-[50px] text-2xl font-bold text-center mb-3' data-aos="fade-up">{head}</h2>
      <p className='text-subText text-center md:text-base text-sm' data-aos="fade-up">{text}</p>
    </div>
  )
}

export default CommonHead