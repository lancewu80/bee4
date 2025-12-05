import React from 'react'
import icon1 from '../../assets/Icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import icon8 from '../../assets/icon8.png'

import PropertyDetails from './PropertyDetails'
import DetailsRightSide from './DetailsRightSide'
import Slider from 'react-slick'
import SingleHouseCard from '../common/SingleHouseCard'
import { realEstateData } from '../../../public/RealStateData'
import { useNavigate } from 'react-router'

const DetailsInfo = ({ totalArea, bedrooms, bathrooms, floor, elevator, year }) => {
    const settings = {
        dots: false,
        autoPlay: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const property = [
        {
            icon: icon1,
            name: 'Total Area',
            detail: `${totalArea} sq.ft`
        },
        {
            icon: icon6,
            name: 'Elevator',
            detail: elevator
        },
        {
            icon: icon2,
            name: 'Bedrooms',
            detail: bedrooms
        },
        {
            icon: icon7,
            name: 'Parking',
            detail: 'Yes'
        },
        {
            icon: icon3,
            name: 'Bathrooms',
            detail: bathrooms
        },
        {
            icon: icon8,
            name: 'WI-FI',
            detail: 'Yes'
        },
        {
            icon: icon4,
            name: 'Floor',
            detail: floor
        },
        {
            icon: icon1,
            name: 'Construction year',
            detail: year
        },
    ]
    // ------------------------- Handle Navigate 
    const navigate = useNavigate()

    const handleNav = (e) => {
        navigate('/details', { state: e })
    }
    return (
        <>
            <main id='Details-Info' className='mt-[40px] md:mt-[80px]'>
                <div className="container">
                    <div id="Details-Info-Row" className='flex flex-col md:flex-row items-start justify-between gap-y-6 md:gap-y-0 md:gap-x-6'>
                        {/* ----------------------------- Left side ----------------------- */}
                        <section className='w-full md:w-[856px]'>

                            <p className='text-brand leading-[24px] md:text-base text-sm'>Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim ac ullamcorper.</p>
                            <p className='text-brand leading-[24px] mt-3 md:text-base text-sm'>Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est. Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo. Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor porta. Pharetra netus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer.</p>

                            {/* ---------------- Property Details  */}
                            <h2 className='text-headText text-[20px] md:text-[28px] font-semibold mb-5 mt-[40px] md:mt-[60px]'>Property details</h2>
                            <div className='flex items-start justify-between flex-wrap gap-x-6 gap-y-2'>
                                {
                                    property.map((item, i) => (
                                        <div key={i} className='w-full md:w-[400px] flex items-center justify-between border-b border-[#7a747442] py-2'>
                                            <div className='flex items-center gap-2'>
                                                <img className='md:w-auto w-[28px]' src={item.icon} alt="icons" />
                                                <p className='text-subText md:text-xl text-lg font-medium'>{item.name}</p>
                                            </div>
                                            <p className='text-brand md:text-xl text-lg font-medium'>{item.detail}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* ------------------ Whats Nearby  */}
                            <PropertyDetails />
                        </section>

                        {/* ----------------------------- Right side ----------------------- */}
                        <aside className='w-full md:w-[360px]'>
                            <DetailsRightSide />
                        </aside>
                    </div>

                    {/* --------------------------- Recommended Products ----------------------- */}
                    <section className='mt-8 md:mt-15'>
                        <h2 className='text-headText text-[20px] md:text-[40px] font-semibold'>Recommended Properties</h2>
                        <p className='text-[#000000c7] mb-6 md:mb-10 text-sm md:text-base'>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>

                        <Slider {...settings}>
                            {
                                realEstateData.map((item, i) => (
                                    <div key={i} onClick={() => handleNav(item)} className='cursor-pointer px-2'>
                                        <SingleHouseCard img={item.image} title={item.title} desc={item.description} price={item.price} beds={item.bedrooms} baths={item.bathrooms} area={item.totalArea} garages={item.elevator} label={item.label} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </section>
                </div>
            </main>
        </>
    )
}

export default DetailsInfo