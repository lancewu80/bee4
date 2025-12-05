import React from 'react'
import { Link } from 'react-router'
import { IoIosTrendingUp } from 'react-icons/io'
import personSmall from '../../assets/person1.png'
import personBig from '../../assets/personBig.png'
import personComment from '../../assets/personComment.png'


const Personalized = () => {
  return (
    <>
        <main id='Personalized' className='md:mt-[140px] mt-[80px]'>
            <div className="container">
                <div id="Personalized-Row"  className='flex items-center justify-between flex-wrap gap-y-10 md:flex-row flex-col-reverse'>
                    {/* ------------------ Expert texts ------------------ */}
                    <div className='md:w-[526px]'>
                        <h2 className='md:text-[40px] text-xl text-headText font-bold md:leading-[50px] md:mb-10 mb-4' data-aos="fade-up">Real estate, personalized for you</h2>
                        <h2 className='md:text-base text-sm text-black font-base leading-[20px] md:mb-10 mb-6' data-aos="fade-up">Pretium interdum risus risus facilisis cras pellentesque ipsum suspendisse venenatis. Morbi posuere semper etiam imperdiet orci ut. Lacus odio arcu massa porttitor curabitur a in. Faucibus ipsum lacinia aenean nec.</h2>
                        <Link to={'/contact'} className='text-primary md:text-base text-sm bg-[#0057FF] md:w-[200px] w-fit md:px-0 px-6 text-center md:py-4 py-3 rounded-[6px] cursor-pointer hover:bg-brand hover:text-primary duration-300 flex items-center gap-3 justify-center' data-aos="fade-up">Contact Us <IoIosTrendingUp className='text-xl' /></Link>
                    </div>

                    {/* ------------------ Expert Image ------------------ */}
                    <div className='flex items-end gap-6 relative '>
                        <img className='md:w-auto w-[38%]' src={personSmall} alt="images" data-aos="fade-up"/>
                        <img className='md:mb-[50px] mb-[30px] md:w-auto w-[50%]' src={personBig} alt="images"  data-aos="fade-up"/>
                        <img className='absolute md:-bottom-[0px] bottom-7 md:right-[150px] right-[80px] md:w-auto w-[200px]' src={personComment} alt="images" data-aos="fade-up"/>
                    </div>

                </div>
            </div>
        </main>
    </>
  )
}

export default Personalized