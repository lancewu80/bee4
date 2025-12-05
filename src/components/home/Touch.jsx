import React from 'react'
import touchBg from '../../assets/touchBg.png'
const Touch = () => {
    return (
        <>
            <main id='Touch' className='mt-[100px] bg-center bg-no-repeat bg-cover' data-aos="fade-up" style={{ background: `url(${touchBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div className="container">
                    <div id="Touch-Row" className='py-[40px] sm:py-[60px] md:py-[80px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[138px] px-4 md:px-6 lg:px-0'>
                        {/* ----------------------- Left side ----------------------- */}
                        <div className="bg-[#0b0d28] text-white p-6 sm:p-8 rounded-xl w-full max-w-[416px] flex flex-col gap-3.5" data-aos="fade-up">
                            <h3 className="text-[24px] sm:text-[28px] font-bold">Get in touch</h3>
                            <p className="text-sm sm:text-base text-primary">
                                Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
                            </p>

                            <input type="text" placeholder="Your name" className="p-3 bg-white rounded-md text-black outline-none text-sm sm:text-base" />
                            <input type="email" placeholder="Your mail" className="p-3 bg-white rounded-md text-black outline-none text-sm sm:text-base" />
                            <input type="tel" placeholder="Your phone" className="p-3 bg-white rounded-md text-black outline-none text-sm sm:text-base" />
                            <textarea rows="3" placeholder="Your message" className="p-3 bg-white rounded-md text-black outline-none text-sm sm:text-base"></textarea>

                            <button className="bg-blue-600 mt-2 hover:bg-blue-700 transition text-white w-full sm:w-[200px] cursor-pointer font-medium py-3 rounded-md text-sm sm:text-base">
                                Send message
                            </button>
                        </div>
                        {/* ----------------------- Right side ----------------------- */}
                        <div className="text-center lg:text-left" data-aos="fade-up">
                            <h2 className='text-white text-[28px] sm:text-[34px] md:text-[40px] font-bold w-full lg:w-[500px]'>Putting a plan to action, to assure your satisfaction! </h2>
                            <p className='mt-3 sm:mt-5 text-white w-full lg:w-[415px] text-sm sm:text-base'>Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam habitant elit</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Touch