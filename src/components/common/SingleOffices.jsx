import React from 'react'
import img from '../../assets/office1.png'
const SingleOffices = ({img, name, location, phone, email}) => {
  return (
    <div className='w-[400px]'>
        <img src={img} alt="Office image" data-aos="fade-up"/>
        <h2 className='md:mt-3 mt-2 md:text-2xl text-xl text-brand font-semibold' data-aos="fade-up">{name}</h2>
        <p className='text-subText md:text-base text-sm' data-aos="fade-up">{location}</p>
        <h2 className='md:mt-3 mt-2 text-brand font-medium md:text-base text-sm' data-aos="fade-up">{phone}</h2>
        <h2 className='mt-1 text-brand font-medium md:text-base text-sm' data-aos="fade-up">{email}</h2>
    </div>
  )
}

export default SingleOffices