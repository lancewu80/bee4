import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { GoSearch } from 'react-icons/go'
import { BsSliders } from 'react-icons/bs'

const FloatingSearch = () => {

    const [nav, setNav] = useState('all')

    return (
        <section className='w-[90%] md:w-[95%] lg:w-[1076px] bg-primary px-4 sm:px-6 md:px-10 py-3 relative rounded-b-[12px] md:rounded-tr-[12px] mx-auto translate-y-[-60px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)]' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="2000" data-aos-offset="20">
            {/* -------------------- Nav select  */}
            <div className='w-full sm:w-[312px] h-[45px] sm:h-[55px] bg-[#F7F7F7] absolute top-[-45px] sm:top-[-55px] left-0 flex items-center justify-center rounded-t-[12px]'>
                <div className={`${nav === 'all' ? 'bg-[#ececec]' : 'bg-transparent'} h-full w-1/3 sm:w-[78px] duration-300 flex items-center rounded-tl-[12px] justify-center relative cursor-pointer`} onClick={() => setNav('all')}>
                    <p className="text-sm sm:text-base">All</p>
                    <div className={`${nav === 'all' ? 'bg-black' : 'bg-transparent'} w-full h-[2px] absolute bottom-0 left-0 transition-all duration-300`}></div>
                </div>

                {/* --- For Sale Tab --- */}
                <div className={`${nav === 'for_sale' ? 'bg-[#ececec]' : 'bg-transparent'} h-full w-1/3 sm:w-[116px] duration-300 flex items-center justify-center relative cursor-pointer`} onClick={() => setNav('for_sale')}>
                    <p className="text-sm sm:text-base">For Sale</p>
                    <div className={`${nav === 'for_sale' ? 'bg-black' : 'bg-transparent'} w-full h-[2px] absolute bottom-0 left-0 transition-all duration-300`}></div>
                </div>

                {/* --- For Rent Tab --- */}
                <div className={`${nav === 'for_rent' ? 'bg-[#ececec]' : 'bg-transparent'} h-full w-1/3 sm:w-[118px] duration-300 flex items-center justify-center relative cursor-pointer`} onClick={() => setNav('for_rent')}>
                    <p className="text-sm sm:text-base">For Rent</p>
                    <div className={`${nav === 'for_rent' ? 'bg-black' : 'bg-transparent'} w-full h-[2px] absolute bottom-0 left-0 transition-all duration-300`}></div>
                </div>
            </div>

            {/* ------------------- Drop Downs  */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2'>
                <div className='w-full sm:w-[255px] p-3 sm:p-4 flex items-center justify-between cursor-pointer rounded-[12px] hover:bg-gray-100 duration-300'>
                    <p className='text-brand text-sm sm:text-base'>Category</p>
                    <IoIosArrowDown />
                </div>
                <div className='w-full sm:w-[255px] p-3 sm:p-4 flex items-center justify-between cursor-pointer rounded-[12px] hover:bg-gray-100 duration-300'>
                    <p className='text-brand text-sm sm:text-base'>Property Type</p>
                    <IoIosArrowDown />
                </div>
                <div className='w-full sm:w-[255px] p-3 sm:p-4 flex items-center justify-between cursor-pointer rounded-[12px] hover:bg-gray-100 duration-300'>
                    <p className='text-brand text-sm sm:text-base'>Location</p>
                    <IoIosArrowDown />
                </div>
                <div className='w-full sm:w-[255px] p-3 sm:p-4 flex items-center justify-between rounded-[12px] hover:bg-gray-100 duration-300'>
                    <button className='cursor-pointer'>
                        <BsSliders className='text-xl sm:text-2xl' />
                    </button>
                    <button className='bg-[#0057FF] hover:bg-[#2f74ff] duration-300 rounded-[12px] py-2 sm:py-[15px] px-4 sm:px-[29px] flex items-center gap-2 sm:gap-3 text-primary cursor-pointer text-base sm:text-xl font-medium'>
                        <GoSearch className='text-xl sm:text-2xl' />
                        Search
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FloatingSearch