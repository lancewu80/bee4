import React from 'react'
import touchBg from '../../assets/contactBg.png'
import { FiMapPin } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const ContactTouch = () => {
    return (
        <>
            <main id='Touch' className='bg-center bg-no-repeat bg-cover md:bg-fixed' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="1000" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url(${touchBg})`}}>
                <div className="container">
                    <div id="Touch-Row" className='md:py-[80px] py-[40px] flex items-center justify-center md:gap-[138px] gap-6 flex-wrap-reverse'>
                        {/* ----------------------- Left side ----------------------- */}
                        <div className="bg-[#0b0d28] text-white p-8 rounded-xl w-full max-w-[416px] flex flex-col gap-3.5" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="1400">
                            <h3 className="text-[28px] font-bold">Get in touch</h3>
                            <p className="text-base text-primary">
                                Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
                            </p>

                            <input type="text" placeholder="Your name" className="p-3 bg-white rounded-md text-black outline-none" />
                            <input type="email" placeholder="Your mail" className="p-3 bg-white rounded-md text-black outline-none" />
                            <input type="tel" placeholder="Your phone" className="p-3 bg-white rounded-md text-black outline-none" />
                            <textarea rows="3" placeholder="Your message" className="p-3 bg-white rounded-md text-black outline-none"></textarea>

                            <button className="bg-blue-600 mt-2 hover:bg-blue-700 transition text-white w-[200px] cursor-pointer font-medium py-3 rounded-md">
                                Send message
                            </button>
                        </div>
                        {/* ----------------------- Right side ----------------------- */}
                        <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="1800">
                            <h2 className='text-brand md:text-[50px] text-2xl font-bold md:w-[330px] md:leading-[45px]'>Feel free to contact us</h2>
                            <p className='md:mt-5 mt-1 text-brand md:w-[415px]'>Leo morbi faucibus mattis pharetra </p>

                            <div className='flex items-start gap-3 mt-5'>
                                <FiMapPin className='md:text-2xl text-lg mt-1.5'/>
                                <p className='text-headText md:text-xl text-sm font-semibold md:w-[260px]'>8911 Tanglewood Ave. Capitol Heights, MD 20743</p>
                            </div>
                            <div className='flex items-start gap-3 md:mt-6 mt-3'>
                                <IoCallOutline className='md:text-2xl text-lg'/>
                                <p className='text-headText md:text-xl text-sm font-semibold'>(566) 237-4687</p>
                            </div>
                            <div className='flex items-start gap-3 md:mt-6 mt-3'>
                                <IoCallOutline className='md:text-2xl text-lg'/>
                                <p className='text-headText md:text-xl text-sm font-semibold'>(239) 319-8083</p>
                            </div>
                            <div className='flex items-start gap-3 md:mt-6 mt-3'>
                                <CiMail className='md:text-2xl text-lg mt-1'/>
                                <p className='text-headText md:text-xl text-sm font-semibold'>munnascript@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactTouch