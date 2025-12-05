import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import { FaBarsStaggered } from 'react-icons/fa6';
import { Link } from 'react-router';
import { FaRegCircleUser } from 'react-icons/fa6'
import { IoCallOutline } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx';

const ResNavBar = () => {
    const [Value, SetValue] = useState(true)
    return (
        <>
            <nav id='navbar2' className='lg:hidden block sticky top-0 bg-white z-30 py-[16px] duration-300'>
                <div className="container">
                    <div id="NavBar_Row" className='flex items-center justify-between' >
                        <div data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500" data-aos-duration="2000">
                            <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                        </div>
                        {/* -----------Links--------  */}
                        <div className='flex items-center gap-4'>
                            <ul className='flex items-center gap-x-2 text-[23px] text-second font-roboto'>
                                <li><button className='w-[40px] cursor-pointer h-[40px] flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500" data-aos-duration="2400"><FaRegCircleUser /></button></li>
                                <li><button className='w-[40px] cursor-pointer h-[40px] flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500" data-aos-duration="2400"><IoCallOutline /></button></li>
                            </ul>
                            {/* -----------Nav button--------  */}
                            <div className='flex items-center gap-5 text-2xl text-black' data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500" data-aos-duration="2800">
                                <FaBarsStaggered onClick={() => SetValue(!Value)} className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------Button Menu------ */}
                <div className={`absolute top-0 left-0 w-full h-screen duration-[.3s] z-[40] ${Value ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
                    <div onClick={() => SetValue(!Value)} className={`w-full h-screen absolute top-0 left-0 bg-[#00000070] duration-300 backdrop-blur-sm ${Value ? 'pointer-events-none opacity-0' : 'opacity-100'}`}></div>
                    <div className={`h-screen w-[60%] absolute top-0 bg-white p-5 duration-[.8s] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden z-50 ${Value ? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[-0px]'}`}>
                        <div className='flex items-center justify-between absolute top-0 right-0 w-full px-4 mt-[25px]'>
                            <Link to={'/'}><img src={Logo} alt="Logo" data-aos="fade-up" /></Link>
                            <button className='cursor-pointer text-black text-2xl' onClick={() => SetValue(!Value)}>
                                <RxCross2 />
                            </button>
                        </div>

                        <div className='flex flex-col items-start gap-5 text-xl mt-25'>
                            <div data-aos="fade-up" className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={() => SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' to={'/'}>Home</Link></div>
                            <div data-aos="fade-up" className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={() => SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' to={'/property'}>Property</Link></div>
                            <div data-aos="fade-up" className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={() => SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' to={'/about'}>About Us</Link></div>
                            <div data-aos="fade-up" className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={() => SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' to={'/contact'}>Contact Us</Link></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default ResNavBar