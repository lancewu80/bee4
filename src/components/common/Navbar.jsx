import React from 'react'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router'
import { FaRegCircleUser } from 'react-icons/fa6'
import { IoCallOutline } from 'react-icons/io5'
const Navbar = () => {
  return (
    <>
        <nav id='Nav' className='hidden lg:block'>
            <div className="container">
                <div id="Nav-Row" className='py-5 flex items-center justify-between'>
                    {/* ---------------- Logo  */}
                    <Link to={'/'}><img className='w-[110px]' src={logo} alt="Logo" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="800"/></Link>

                    {/* ---------------- Nav Links  */}
                    <ul className='flex items-center gap-7 text-brand font-medium'>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1000"><Link id='HoverLinks' to={'/'}>Home</Link></li>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1200"><Link id='HoverLinks' to={'/property'}>Property</Link></li>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1400"><Link id='HoverLinks' to={'/about'}>About Us</Link></li>
                        <li data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1500"><Link id='HoverLinks' to={'/contact'}>Contact US</Link></li>
                    </ul>

                    {/* ---------------- Nav Links  */}
                    <div className='flex items-center gap-6'>
                        <div data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="2000">
                            <Link id='HoverLinks' to={'/'} className='flex items-center gap-2 text-brand font-medium'>
                                <FaRegCircleUser className='text-2xl' />
                                Login
                            </Link>
                        </div>
                        <div data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="2200">
                            <Link id='HoverLinks' to={'/'} className='flex items-center gap-2 text-brand font-medium'>
                                <IoCallOutline className='text-2xl' />
                                (257) 388-6895
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar