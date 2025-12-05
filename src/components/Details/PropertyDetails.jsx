import React from 'react'
import { PiGraduationCap } from 'react-icons/pi'
import { MdOutlineMedicalServices } from 'react-icons/md'
import { IoPlay, IoRestaurantOutline } from 'react-icons/io5'
import { BsBank } from 'react-icons/bs'
import { FiCheckSquare } from 'react-icons/fi'
import detailPlan from '../../assets/detailPlan.svg'
import videoImg from '../../assets/aboutBg.jpg'
import { Link } from 'react-router'

const PropertyDetails = () => {
    return (
        <div>
            <h2 className='text-headText md:text-[28px] text-xl font-semibold mb-5 md:mt-[60px] mt-10'>What's nearby</h2>
            <h2 className='text-brand md:text-[24px] text-xl font-semibold mb-5 flex items-center gap-2 border-b border-[#7a747442] pb-2'><PiGraduationCap />Education</h2>
            <div>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>Allen Academy <span className='text-brand'>0.089 mile</span></p>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>St. Joseph School <span className='text-brand'>0.028 mile</span></p>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>George Washington School <span className='text-brand'>0.059 mile</span></p>
            </div>

            <h2 className='text-brand md:text-[24px] text-xl font-semibold mb-5 md:mt-[60px] mt-10 flex items-center gap-2 border-b border-[#7a747442] pb-2'><MdOutlineMedicalServices />Health & Medicine </h2>
            <div>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>Allen Academy <span className='text-brand'>0.089 mile</span></p>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>St. Joseph School <span className='text-brand'>0.028 mile</span></p>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>George Washington School <span className='text-brand'>0.059 mile</span></p>
            </div>

            <h2 className='text-brand md:text-[24px] text-xl font-semibold mb-5 md:mt-[60px] mt-10 flex items-center gap-2 border-b border-[#7a747442] pb-2'><IoRestaurantOutline />Food </h2>
            <div>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>Allen Academy <span className='text-brand'>0.089 mile</span></p>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>St. Joseph School <span className='text-brand'>0.028 mile</span></p>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>George Washington School <span className='text-brand'>0.059 mile</span></p>
            </div>

            <h2 className='text-brand md:text-[24px] text-xl font-semibold mb-5 md:mt-[60px] mt-10 flex items-center gap-2 border-b border-[#7a747442] pb-2'><BsBank />Culture </h2>
            <div>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>Allen Academy <span className='text-brand'>0.089 mile</span></p>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>St. Joseph School <span className='text-brand'>0.028 mile</span></p>
                <p className='text-subText md:text-xl text-base font-medium flex items-center justify-between md:mb-3 mb-1'>George Washington School <span className='text-brand'>0.059 mile</span></p>
            </div>


            {/* ------------------------------- Apartment plan  */}
            <section className='bg-headText md:p-12 p-8 mt-15 rounded-[12px] flex items-center flex-wrap-reverse gap-y-6 justify-between'>
                {/* ------ left side  */}
                <div>
                    <h2 className='md:text-[28px] text-xl font-semibold text-white md:mb-7 mb-5'>Apartment plan</h2>

                    <h2 className='md:text-xl text-base font-semibold text-white flex items-center gap-2'><FiCheckSquare className='md:text-2xl text-xl' />Apartment layout</h2>
                    <p className='text-white text-sm w-[276px] mt-2'>Aliquam viverra malesuada dui consequat in cras</p>

                    <h2 className='md:text-xl text-base font-semibold text-white flex items-center gap-2 md:mt-8 mt-6'><FiCheckSquare className='md:text-2xl text-xl' />Dignissim ut rhoncus elit </h2>
                    <p className='text-white text-sm w-[276px] mt-2'>Velit at netus pretium nibh bibendum sit posuere turpis </p>

                    <h2 className='md:text-xl text-base font-semibold text-white flex items-center gap-2 md:mt-8 mt-6'><FiCheckSquare className='md:text-2xl text-xl' /> Aliquam viverra malesui</h2>
                    <p className='text-white text-sm w-[276px] mt-2'>Nunc porttitor et odio sed vel. Velit at netus pretium nibh bibendum</p>
                </div>

                <div>
                    <img src={detailPlan} alt="Plan" />
                </div>
            </section>

            {/* ------------------------------- Video  */}
            <h2 className='text-headText text-[28px] font-semibold mb-5 mt-[60px]'>Video</h2>
            <div className='mt-6 w-full md:h-[460px] h-[190px] relative rounded-[12px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${videoImg})` }}>
                <div className='md:pt-[45px] pt-4 md:pl-[44px] pl-4'>
                    <h2 className='md:text-[40px] text-base font-bold text-white'>Faucibus mattis pharetra </h2>
                    <p className='text-white'>Watch video</p>
                </div>
                {/* -------------- Play Button -------------- */}
                <Link to={'https://youtu.be/aO_kPW39um8?si=i2gC5_GZCQzYv-Em'} className='md:w-[74px] w-[50px] md:h-[74px] h-[50px] bg-blueTxt text-white z-10 rounded-full flex items-center justify-center md:text-5xl text-3xl cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <IoPlay className='ml-1.5' />
                    <div className='w-full h-full absolute -z-1 bg-blueTxt text-white rounded-full animate-ping'></div>
                </Link>

                <div className='absolute bottom-[35px] text-end right-[35px] md:w-[484px] md:block hidden'>
                    <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum bibendum tellus sed ultriciespharetra in lorem eget</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails