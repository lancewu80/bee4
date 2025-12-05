import React from 'react'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router'
import { SlSocialFacebook } from 'react-icons/sl'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
const Footer = () => {
  return (
    <>
    <footer className='mt-[112px] bg-headText pt-[100px]'>
            <div className="container">
                <div id="Footer-Row" className='flex flex-wrap md:gap-0 gap-15  items-start justify-between'>
                    {/* ---------------------First Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white' data-aos="fade-up">Opening hours</h2>
                        <ul className='text-primary text-base flex flex-col gap-4 mt-6 opacity-[.8]'>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Mon-Fri 08:00AM - 08:00PM</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Sat-Sun 08:00AM - 08:00PM</Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Second Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white' data-aos="fade-up">Find Us</h2>
                        <ul className='text-primary text-base flex flex-col gap-4 mt-6 opacity-[.8]'>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>8911 Tanglewood</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>(566) 237-4687</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>moinefou@hotmail.com</Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Second Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white' data-aos="fade-up">Property</h2>
                        <ul className='text-primary text-base flex flex-col gap-4 mt-6 opacity-[.8]'>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Apartments</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Villa’s</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/about'}>Houses</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/contact'}>Commercial</Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Third Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white' data-aos="fade-up">Links</h2>
                        <ul className='text-primary text-base flex flex-col gap-4 mt-6 opacity-[.8]'>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Home </Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Property</Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>About </Link></li>
                            <li data-aos="fade-up"><Link id='HoverLinks' to={'/'}>Contact </Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Fourth Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-white' data-aos="fade-up">Subscribe </h2>
                        <p className='font-dmSans md:text-base text-primary md:mt-[16px] mt-3' data-aos="fade-up">Subscribe to our newsletter</p>
                        <div className='relative bg-white rounded-[12px] w-[323px] h-[52px] mt-6' data-aos="fade-up">
                            <input className='py-[22px] pl-[24px] h-full w-full outline-none' type="text" placeholder='Enter your email here'/>
                            <button className='absolute top-1/2 right-2 -translate-y-1/2 bg-[#0057FF] text-white font-dmSans text-base py-[8px] px-[16px] rounded-[12px] cursor-pointer hover:bg-brand duration-300 hover:text-primary'>Subscribe</button>
                        </div>
                    </div>
                </div>
                {/* --------------------------Bottom Header------------------------ */}
                <div id='Footer-Second-row' className='border-t border-white mt-[60px] pt-[30px] pb-[60px] flex flex-wrap md:gap-0 gap-10 items-center justify-between'>
                    <div>
                        <h2 className='font-roboto font-semibold md:text-lg text-primary' data-aos="fade-up" data-aos-offset="20">Copyright by</h2>
                        <p className='font-dmSans md:text-base text-primary md:mt-[16px] mt-3' data-aos="fade-up" data-aos-offset="20">© Developed by <Link className='underline underline-offset-3' to={'https://munna-scriptz.vercel.app/'}>Munna-Scriptz</Link></p>
                    </div>
                    <div>
                        <h2 className='font-roboto font-semibold md:text-lg text-primary' data-aos="fade-up" data-aos-offset="20">Contact Us</h2>
                        <p className='font-dmSans md:text-base text-primary md:mt-[16px] mt-3' data-aos="fade-up" data-aos-offset="20">munnascriptz@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-[15px]' data-aos="fade-up" data-aos-offset="20">
                        <Link to={'/'} className='bg-primary text-brand w-[40px] h-[40px] rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-[#0057FF] hover:text-primary duration-[.3s]'>
                            <SlSocialFacebook />
                        </Link>
                        <Link to={'/'} className='bg-primary text-brand w-[40px] h-[40px] rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-[#0057FF] hover:text-primary duration-[.3s]'>
                            <AiOutlineInstagram />
                        </Link>
                        <Link to={'/'} className='bg-primary text-brand w-[40px] h-[40px] rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-[#0057FF] hover:text-primary duration-[.3s]'>
                            <CiLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer