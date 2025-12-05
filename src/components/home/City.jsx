import React from 'react'
import CommonHead from '../common/CommonHead'
import newYork from '../../assets/newYork.png'
import chicago from '../../assets/chicago.png'
import hawaii from '../../assets/hawai.png'
import francisco from '../../assets/francisco.png'
import london from '../../assets/london.png'
import { Link } from 'react-router'

const City = () => {
    return (
        <>
            <main id='City' className='my-[112px]'>
                <div className="container">
                    <div id="City-Row">
                        {/* ----------------- Header text ----------------- */}
                        <CommonHead head={'What city will you live in?'} text={'Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu urna eget'} />

                        {/* ----------------- City gallery ----------------- */}
                        <section className='mt-8 sm:mt-12 md:mt-16 flex flex-col lg:flex-row items-center gap-6 px-4 md:px-6 lg:px-0'>
                            {/* ---------------------- left Images  */}
                            <div className='flex flex-col gap-6 w-full lg:w-auto'>
                                <div className='flex flex-col sm:flex-row items-center gap-6 w-full'>
                                    <Link to={'/property'} className='relative rounded-[12px] cursor-pointer group overflow-hidden duration-300 w-full' data-aos="fade-up">
                                        <img className='w-full rounded-[12px] group-hover:scale-[1.4] duration-500 group-hover:blur-sm' src={newYork} alt="cities" />
                                        <article className="absolute bottom-5 left-4 transform-gpu transition-all duration-700 ease-in-out group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2">
                                            <h2 className='text-xl sm:text-2xl font-bold text-white'>New York</h2>
                                            <p className='text-white text-sm sm:text-base'>28 properties</p>
                                        </article>
                                    </Link>
                                    <Link to={'/property'} className='relative rounded-[12px] cursor-pointer group overflow-hidden w-full sm:w-1/2' data-aos="fade-up">
                                        <img className='w-full rounded-[12px] group-hover:scale-[1.4] duration-500 group-hover:blur-sm' src={chicago} alt="cities" />
                                        <article className="absolute bottom-5 left-4 transform-gpu transition-all duration-700 ease-in-out group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2">
                                            <h2 className='text-xl sm:text-2xl font-bold text-white'>Chicago</h2>
                                            <p className='text-white text-sm sm:text-base'>6 properties</p>
                                        </article>
                                    </Link>
                                </div>

                                <div className='flex flex-col sm:flex-row items-center gap-6 w-full'>
                                    <Link to={'/property'} className='relative rounded-[12px] cursor-pointer group overflow-hidden w-full' data-aos="fade-up">
                                        <img className='w-full rounded-[12px] group-hover:scale-[1.4] duration-500 group-hover:blur-sm' src={hawaii} alt="cities" />
                                        <article className="absolute bottom-5 left-4 transform-gpu transition-all duration-700 ease-in-out group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2">
                                            <h2 className='text-xl sm:text-2xl font-bold text-white'>San Diego</h2>
                                            <p className='text-white text-sm sm:text-base'>18 properties</p>
                                        </article>
                                    </Link>
                                    <Link to={'/property'} className='relative rounded-[12px] cursor-pointer group overflow-hidden duration-300 w-full sm:w-1/2' data-aos="fade-up">
                                        <img className='w-full rounded-[12px] group-hover:scale-[1.4] duration-500 group-hover:blur-sm' src={francisco} alt="cities" />
                                        <article className="absolute bottom-5 left-4 transform-gpu transition-all duration-700 ease-in-out group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2">
                                            <h2 className='text-xl sm:text-2xl font-bold text-white'>San Francisco</h2>
                                            <p className='text-white text-sm sm:text-base'>28 properties</p>
                                        </article>
                                    </Link>
                                </div>
                            </div>
                            {/* ---------------------- Right Images  */}
                            <Link to={'/property'} data-aos="fade-up" className='relative w-full sm:w-[306px] h-[300px] sm:h-[545px] rounded-[12px] cursor-pointer group overflow-hidden'>
                                <img className='w-full h-full object-cover rounded-[12px] group-hover:scale-[1.4] duration-500 group-hover:blur-sm' src={london} alt="cities" />
                                <article className="absolute bottom-5 left-4 transform-gpu transition-all duration-700 ease-in-out group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2">
                                    <h2 className='text-xl sm:text-2xl font-bold text-white'>London</h2>
                                    <p className='text-white text-sm sm:text-base'>6 properties</p>
                                </article>
                            </Link>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default City