import React from 'react'
import { IoCameraOutline } from 'react-icons/io5'

const DetailBanner = ({ label, name, price, pricePerSq, location, image, smallImg, }) => {
    return (
        <>
            <main id='Detail-Banner'>
                <div className="container">
                    <div id="Detail-Banner-Row">
                        {/* --------------------------- Head --------------------------- */}
                        <header className='pt-3'>
                            {
                                label === 'For Sale' ?
                                    <div className='w-fit px-8 mb-3 rounded-[6px] py-3 bg-[#8EDA53] text-white md:text-base text-sm flex items-center justify-center'>
                                        <p>{label}</p>
                                    </div>
                                    :
                                    <div className='w-fit px-8 mb-3 rounded-[6px] py-3 bg-[#9653DA] text-white md:text-base text-sm flex items-center justify-center'>
                                        <p>{label}</p>
                                    </div>
                            }
                            <div>
                                <h2 className='md:text-[42px] text-xl text-headText font-semibold flex items-center justify-between flex-wrap gap-2'>{name} <span className='text-brand'>${price}</span></h2>
                                <p className='md:text-xl text-base md:mt-0 mt-3 text-[#000000be] font-normal flex items-center justify-between flex-wrap gap-y-3'><span className='md:w-[850px]'>{location}</span> <span className='text-brand'>${pricePerSq}/sq.ft</span></p>
                            </div>
                        </header>
                        {/* --------------------------- Images and Preview --------------------------- */}
                        <section className='mt-10 flex items-center justify-between flex-wrap gap-y-4'>
                            <div className='md:w-[800px] rounded-[20px]' >
                                <img className='w-full md:rounded-[20px] rounded-[8px]' src={image} alt="House Preview" />
                            </div>

                            <div className='md:w-[410px] flex items-center md:flex-col md:gap-6 gap-4'>
                                <div className='md:w-full w-1/2 cursor-pointer md:h-[245px] h-[120px] bg-cover bg-center rounded-[12px] flex flex-col items-center justify-center text-white' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${smallImg})` }}>
                                    <IoCameraOutline className='md:text-2xl text-lg' />
                                    <h2 className='md:text-2xl text-base font-bold'>Show all</h2>
                                    <p className='md:text-base text-sm'>12 photos</p>
                                </div>

                                {/* --------------- Google map  */}
                                <div className="relative md:w-full w-1/2 md:h-[245px] h-[120px] rounded-[12px] overflow-hidden">
                                    <iframe
                                        className="w-full h-full outline-none"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5844997035992!2d90.3973168743956!3d23.868883784219154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59ad99e526d%3A0x8301be280dfeb039!2sCreative%20IT%20Institute%2C%20Uttara%20Campus!5e0!3m2!1sen!2sbd!4v1758272357582!5m2!1sen!2sbd"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                    <div className="absolute inset-0 bg-[#0c0c0c2a] pointer-events-none"></div>
                                </div>
                            </div>

                        </section>

                    </div>
                </div>
            </main>
        </>
    )
}

export default DetailBanner