import React from 'react'
import expertImg from '../../assets/aboutImg.png'

const ExpertAdvice = () => {
  return (
    <>
        <main id='Expert-Advice' className='md:mt-[120px] mt-[80px]'>
            <div className="container">
                <div id="Expert-Advice-Row"  className='flex items-center justify-between flex-wrap gap-y-6'>
                    {/* ------------------ Expert Image ------------------ */}
                    <img src={expertImg} alt="Experts" data-aos="fade-up"/>

                    {/* ------------------ Expert texts ------------------ */}
                    <div className='md:w-[526px] w-full'>
                        <h2 className='md:text-[40px] text-xl text-headText font-bold md:leading-[50px] md:mb-10 mb-4' data-aos="fade-up">Expert advice for all your real estate needs</h2>
                        <h2 className='md:text-base text-sm text-black font-base leading-[20px] mb-10' data-aos="fade-up">Pretium interdum risus risus facilisis cras pellentesque ipsum suspendisse venenatis. Morbi posuere semper etiam imperdiet orci ut. Lacus odio arcu massa porttitor curabitur a in. Faucibus ipsum lacinia aenean nec.</h2>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default ExpertAdvice