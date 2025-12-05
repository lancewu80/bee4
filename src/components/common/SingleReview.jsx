import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaQuoteLeft } from 'react-icons/fa6'

const SingleReview = ({image, message, username, role }) => {
    return (
        <>
            <div className='mb-1' data-aos="fade-up">
                <div className='md:w-[400px] w-full px-[14px] pb-[24px] rounded-[8px] shadow-md'>
                    {/* -------Quote------ */}
                    <div id='Quote' className='bg-[#0057FF] w-[44px] h-[44px] rounded-[6px] flex items-center justify-center'>
                        <FaQuoteLeft className='text-[20px] text-primary' />
                    </div>
                    <p className='text-gray700 text-base mt-[24px] h-[156px]'>{message}</p>
                    <div className='text-[#FFBA08] text-[12px] flex items-center gap-1'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                {/* ----------Profile--------- */}
                <div className='mt-[24px] flex items-center gap-[16px]'>
                    <img src={image} alt="Profile" />
                    <div>
                        <h2 className='text-brand text-[14px] font-bold'>{username}</h2>
                        <p className='text-brand text-[12px] font-normal'>{role}</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default SingleReview