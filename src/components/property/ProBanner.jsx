import React from 'react'
import bannerBg from '../../assets/bannerImg.png'
import FloatingSearch from '../home/FloatingSearch'


const ProBanner = () => {
  return (
    <>
        <main id='Banner' className='w-full h-[600px] md:h-[730px] pt-2 relative' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="1000">
            <div className="container px-4 md:px-6">
                <div id="Banner-Row" className='w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-[20px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${bannerBg})`, backgroundAttachment: 'fixed'}}>
                    {/* -------------------- Banner text */}
                    <div className='pt-[100px] md:pt-[300px]'>
                        <h1 className='text-primary text-2xl sm:text-[45px] md:text-[60px] leading-[1.2] md:leading-[1.3] font-bold text-center px-4' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="1400">Find a home that suits your lifestyle.</h1>
                        <p className='text-primary leading-[1.6] mt-4 md:mt-10 text-center w-full sm:w-[90%] md:w-[801px] md:text-base text-sm mx-auto px-4' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="1800">Nec risus quis viverra libero tellus eget. Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu urna eget</p>
                    </div>
                </div>
            </div>


            {/* ------------------ FLoating Search Box  */}
            <FloatingSearch />
        </main>
    </>
  )
}

export default ProBanner