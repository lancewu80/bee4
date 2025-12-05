import React, { useState } from 'react'
import CommonHead from '../common/CommonHead'
import SingleHouseCard from '../common/SingleHouseCard'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import img from '../../assets/hawai.png'

import { realEstateData } from "../../../public/RealStateData";
import { useNavigate } from 'react-router';

const Discover = () => {
    const [center, setCenter] = useState(0);

    function NextArrow({ onClick }) {
        return (
            <div
                onClick={onClick}
                className="absolute -right-0 top-1/2 text-[28px] -translate-y-1/2 cursor-pointer bg-white/60 text-brand hover:text-white hover:bg-brand w-10 h-10 rounded-full flex items-center justify-center duration-300 z-10"
            >
                <IoIosArrowForward />
            </div>
        );
    }

    function PrevArrow({ onClick }) {
        return (
            <div
                onClick={onClick}
                className="absolute -left-0 top-1/2 text-[28px] -translate-y-1/2 cursor-pointer bg-white/60 text-brand hover:text-white hover:bg-brand w-10 h-10 rounded-full flex items-center justify-center duration-300 z-10"
            >
                <IoIosArrowBack />
            </div>
        );
    }

    const settings = {
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        infinite: true,
        speed: 1000,
        beforeChange: (oldIndex, newIndex) => setCenter(newIndex),
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]
    }

    // ------------------------- Handle Navigate 
    const navigate = useNavigate()

    const handleNav = (e)=>{
        navigate('/details' , {state: e})
    }
    return (
        <>
            <main id='Discover' className='mt-[62px]'>
                <div className="container">
                    <div id="Discover-Row">
                        {/* -------------------------- Common head  */}
                        <CommonHead head={'Discover your featured property'} text={'Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus'} />

                        {/* -------------------------- Houses  */}
                        <section className='mt-12'>
                            <Slider {...settings}>
                                {realEstateData.map((item, idx) => (
                                    <div onClick={()=>handleNav(item)} key={idx} className="px-2 cursor-pointer">
                                        <div className={`relative rounded-xl transition-transform duration-300 ${idx === center ? "scale-98" : "scale-92"}`} >
                                            <SingleHouseCard img={item.image} title={item.title} desc={item.description} price={item.price} beds={item.bedrooms} baths={item.bathrooms} area={item.totalArea} garages={item.elevator} label={item.label} />
                                            {idx === center ? (
                                                ''
                                            ) : (
                                                <div className=" hidden absolute inset-0 md:flex rounded-[12px] w-[390px] mx-auto items-center justify-center md:bg-[#0000009f]">
                                                    <h3 className="text-white text-lg tracking-widest">{item.title}</h3>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                        </section>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Discover