import React from 'react'
import { realEstateData } from '../../../public/RealStateData'
import SingleHouseCard from '../common/SingleHouseCard'
import Pagination from './Pagination'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const PropertyItems = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;
    // -----------Pagination
    const start = (page - 1) * itemsPerPage;
    const currentItems = realEstateData.slice(start, start + itemsPerPage);
    const totalPages = Math.ceil(realEstateData.length / itemsPerPage);

    // ------------------------- Handle Navigate 
    const navigate = useNavigate()

    const handleNav = (e) => {
        navigate('/details', { state: e })
    }
    return (
        <>
            <main id='Property-Items' className='md:mt-[112px] mt-[80px]'>
                <div className="container">
                    <div id="Property-Items-Row" className='w-full lg:w-4/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-x-5 gap-x-4 md:gap-y-10 gap-y-8'>
                        {
                            currentItems.map((item, i) => (
                                <div onClick={() => handleNav(item)} key={i} className='cursor-pointer'>
                                    <SingleHouseCard img={item.image} title={item.title} desc={item.description} price={item.price} beds={item.bedrooms} baths={item.bathrooms} area={item.totalArea} garages={item.elevator} label={item.label} />
                                </div>
                            ))
                        }
                    </div>

                    {/* ------------------------- Pagination buttons  */}
                    <div className='md:mr-[34px] md:mt-15 mt-8'>
                        <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default PropertyItems