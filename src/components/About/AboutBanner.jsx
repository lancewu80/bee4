import React from 'react'
import { IoHomeOutline, IoPlay } from 'react-icons/io5'
import { MdOutlineHolidayVillage, MdOutlineHomeWork } from 'react-icons/md'
import { PiCityLight } from 'react-icons/pi'
import aboutBg from '../../assets/aboutBg.jpg'
import { Link } from 'react-router'

const AboutBanner = () => {
  return (
    <>
        <main id='content'>
            <div className="container">
                <div id="content-Row">
                    {/* ----------------------------- VIdeo Player ----------------------------- */}
                    <section className='w-full md:h-[620px] h-[300px] bg-cover bg-center bg-no-repeat rounded-[12px] relative' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="1000" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${aboutBg})`}}>
                        {/* -------------- Texts -------------- */}
                        <div className='md:pt-[45px] pt-4 md:pl-[44px] pl-4'>
                            <h2 className='md:text-[40px] text-xl font-bold text-white'>Faucibus mattis pharetra </h2>
                            <p className='text-white'>Watch video</p>
                        </div>

                        {/* -------------- Play Button -------------- */}
                        <Link to={'https://youtu.be/aO_kPW39um8?si=i2gC5_GZCQzYv-Em'} className='md:w-[74px] w-[50px] md:h-[74px] h-[50px] bg-blueTxt text-white z-10 rounded-full flex items-center justify-center md:text-5xl text-3xl cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <IoPlay className='ml-1.5' />
                            <div className='w-full h-full absolute -z-1 bg-blueTxt text-white rounded-full animate-ping'></div>
                        </Link>

                        {/* -------------- Texts -------------- */}
                        <div className='absolute md:bottom-[45px] bottom-4 md:right-[45px] right-4 md:w-[584px] w-full md:block hidden'>
                            <p className='text-white md:text-base text-xs'>Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum bibendum tellus sed ultriciespharetra in lorem eget</p>
                        </div>
                    </section>
                    {/* ----------------------------- Counter ----------------------------- */}
                    <section className='p-10 shadow-md flex gap-y-4 items-center justify-between flex-wrap'>
                        {/* --------------- Counter 1 */}
                        <div className='flex flex-col items-center' data-aos="fade-up">
                            <IoHomeOutline className='text-2xl text-subText'/>
                            <h2 className='text-headText md:text-[50px] text-2xl font-bold'>1250</h2>
                            <p className='text-headText md:text-2xl text-base font-bold'>Properties sold</p>
                        </div>
                        {/* --------------- Counter 2 */}
                        <div className='flex flex-col items-center' data-aos="fade-up">
                            <MdOutlineHomeWork className='text-2xl text-subText'/>
                            <h2 className='text-headText md:text-[50px] text-2xl font-bold'>320</h2>
                            <p className='text-headText md:text-2xl text-base font-bold'>Apartments sold</p>
                        </div>
                        {/* --------------- Counter 3 */}
                        <div className='flex flex-col items-center' data-aos="fade-up">
                            <MdOutlineHolidayVillage className='text-2xl text-subText'/>
                            <h2 className='text-headText md:text-[50px] text-2xl font-bold'>125</h2>
                            <p className='text-headText md:text-2xl text-base font-bold'>Houses sold</p>
                        </div>
                        {/* --------------- Counter 4 */}
                        <div className='flex flex-col items-center' data-aos="fade-up">
                            <PiCityLight className='text-3xl text-subText'/>
                            <h2 className='text-headText md:text-[50px] text-2xl font-bold'>120</h2>
                            <p className='text-headText md:text-2xl text-base font-bold'>Villas sold</p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    </>
  )
}

export default AboutBanner