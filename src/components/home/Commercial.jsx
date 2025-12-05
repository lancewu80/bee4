import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleHouseCard from '../common/SingleHouseCard'
import { realEstateData } from '../../../public/RealStateData'
import { useNavigate } from 'react-router'

const Commercial = () => {
    // ------------------------- Handle Navigate 
    const navigate = useNavigate()

    const handleNav = (e) => {
        navigate('/details', { state: e })
    }
    return (
        <>
            <main id='Commercial' className='mt-[120px]'>
                <div className="container">
                    <div id="Commercial-Row">
                        <CommonHead head={'Commercial property'} text={'Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus'} />

                        {/* ----------------------- Property slider -------------------- */}
                        <div className='mt-10 w-full lg:w-4/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-x-5 gap-x-4 md:gap-y-10 gap-y-8'>
                            {
                                realEstateData.slice(0, 6).map((item, i) => (
                                    <div onClick={() => handleNav(item)} key={i} className='transform hover:-translate-y-5 duration-300 cursor-pointer'>
                                        <SingleHouseCard img={item.image} title={item.title} desc={item.description} price={item.price} beds={item.bedrooms} baths={item.bathrooms} area={item.totalArea} garages={item.elevator} label={item.label} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Commercial