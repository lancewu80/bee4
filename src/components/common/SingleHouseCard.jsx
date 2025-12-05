import React from 'react'
import bedIcon from '../../assets/bedIcon.svg'
import sinkIcon from '../../assets/sinkIcon.svg'
import sizeIcon from '../../assets/sizeIcon.svg'
import garageIcon from '../../assets/garageIcon.svg'

const SingleHouseCard = ({img ,title, desc, price, beds, baths, area, garages, label }) => {
    return (
        <div className='md:w-[390px] w-full mx-auto rounded-[8px] shadow-md pb-6' data-aos="fade-up">
            <div className='relative'>
                <img className="w-full md:aspect-320/204 aspect-244/204 object-cover rounded-lg md:rounded-[8px]" src={img} alt="House Image" />

                {/* -------------- Label  */}
                {
                    label === 'For Sale'?
                    <div className='absolute md:top-5 top-3 md:left-5 left-3 px-6 rounded-[6px] md:py-2.5 py-2 bg-[#8EDA53] text-white md:text-sm text-xs flex items-center justify-center'>
                        <p>{label}</p>
                    </div>
                    :
                    <div className='absolute md:top-5 top-3 md:left-5 left-3 px-6 rounded-[6px] md:py-2.5 py-2 bg-[#9653DA] text-white md:text-sm text-xs flex items-center justify-center'>
                        <p>{label}</p>
                    </div>
                }
            </div>

            <div className='md:pt-6 pt-3 mx:px-6 px-2'>
                <h2 className='md:text-xl text-sm text-brand font-semibold md:mb-2 mb-1 text-ellipsis md:whitespace-nowrap md:w-[350px] w-full line-clamp-1'>{title}</h2> {/* Houses name  */}
                <p className='ms:text-base text-xs text-subText md:mb-3 mb-2 line-clamp-2'>{desc}</p> {/* Houses Details  */}
                <h2 className='md:text-[22px] text-lg text-brand font-semibold mb-4'>${price}</h2> {/* rent Price  */}

                {/* ---------- infos  */}
                <div className='flex items-center justify-between gap-y-2 flex-wrap'>
                    <div>
                        <span className='flex items-center gap-2'>
                            <img src={bedIcon} alt="icon" />
                            <p className='text-headText font-medium'>{beds}</p>
                        </span>
                        <p className='text-headText font-medium md:text-sm text-xs md:mt-1.5 mt-0.5'>Bedrooms</p>
                    </div>
                    <div>
                        <span className='flex items-center gap-2'>
                            <img src={sinkIcon} alt="icon" />
                            <p className='text-headText font-medium'>{baths}</p>
                        </span>
                        <p className='text-headText font-medium md:text-sm text-xs md:mt-1.5 mt-0.5'>bathrooms</p>
                    </div>
                    <div className='md:block hidden'>
                        <span className='flex items-center gap-2'>
                            <img src={sizeIcon} alt="icon" />
                            <p className='text-headText font-medium'>{area}</p>
                        </span>
                        <p className='text-headText font-medium md:text-sm text-xs md:mt-1.5 mt-0.5'>Total area</p>
                    </div>
                    <div className='md:block hidden'>
                        <span className='flex items-center gap-2'>
                            <img src={garageIcon} alt="icon" />
                            <p className='text-headText font-medium'>{garages}</p>
                        </span>
                        <p className='text-headText font-medium md:text-sm text-xs md:mt-1.5 mt-0.5'>Garages</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleHouseCard