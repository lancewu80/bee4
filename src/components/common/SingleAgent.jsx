import React from 'react'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router'
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { RiTelegram2Fill } from 'react-icons/ri'

const SingleAgent = ({img,name,role}) => {
  return (
    <div className='md:w-[620px] w-full md:flex-nowrap flex-wrap p-6 flex items-center gap-[20px] shadow-md' data-aos="fade-up">
        <img className='md:w-auto w-full' src={img} alt="Agent pic" />
        <div className='w-full'>
            <h2 className='text-brand text-2xl font-semibold mb-1'>{name}</h2>
            <p className='text-sm text-headText font-medium'>{role}</p>

            <div className='flex items-center justify-between mt-2 border-b border-[#7a747457] py-2'>
                <p className='text-sm font-semibold text-brand'>Office</p>
                <p className='text-sm font-semibold text-subText'>(358) 707-4989</p>
            </div>
            <div className='flex items-center justify-between border-b border-[#7a747457] py-2.5'>
                <p className='text-sm font-semibold text-brand'>Mobile</p>
                <p className='text-sm font-semibold text-subText'>(822) 622-2842</p>
            </div>
            <div className='flex items-center justify-between border-b border-[#7a747457] py-2.5'>
                <p className='text-sm font-semibold text-brand'>Email</p>
                <p className='text-sm font-semibold text-subText'>munnascriptz@gmail.com</p>
            </div>

            {/* -------------- Socials  */}
            <div className='flex items-center gap-4 mt-4'>
                <Link to={'/'} className='w-[22px] h-[22px] text-sm bg-headText cursor-pointer rounded-full flex items-center justify-center text-white'><FaFacebookF /></Link>
                <Link to={'/'} className='w-[22px] h-[22px] text-sm bg-headText cursor-pointer rounded-full flex items-center justify-center text-white'><FaXTwitter /></Link>
                <Link to={'/'} className='w-[22px] h-[22px] text-sm bg-headText cursor-pointer rounded-full flex items-center justify-center text-white'><AiFillInstagram /></Link>
                <Link to={'/'} className='w-[22px] h-[22px] text-sm bg-headText cursor-pointer rounded-full flex items-center justify-center text-white'><RiTelegram2Fill /></Link>
                <Link to={'/'} className='w-[22px] h-[22px] text-sm bg-headText cursor-pointer rounded-full flex items-center justify-center text-white'><FaYoutube /></Link>
            </div>
        </div>
    </div>
  )
}

export default SingleAgent