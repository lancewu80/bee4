import React from 'react'
import pfp from '../../assets/pfp1.png'
import { realEstateData } from '../../../public/RealStateData'
import SingleHouseCard from '../../components/common/SingleHouseCard'
import { useNavigate } from 'react-router'

const DetailsRightSide = () => {
    // ------------------------- Handle Navigate 
    const navigate = useNavigate()

    const handleNav = (e)=>{
        navigate('/details' , {state: e})
    }
    return (
        <section className='md:w-[416px]'>
            {/* ----------------------- Contact box ------------------------------ */}
            <div className="bg-[#0b0d28] text-white md:p-8 p-6 rounded-xl w-full flex flex-col gap-3.5">
                <h3 className="md:text-[28px] text-xl font-bold">Contact agent</h3>
                <div className='flex items-center gap-3'>
                    <img className='w-15 h-15 rounded-full' src={pfp} alt="pfp" />
                    <div>
                        <h2 className='text-white text-base font-medium mb-1'>Emilia Buck</h2>
                        <p className='text-[#ffffffbd] text-xs mb-1'>(437) 402-2459</p>
                        <p className='text-[#ffffffbd] text-xs'>(437) 402-2459</p>
                    </div>
                </div>
                <input type="text" placeholder="Your name" className="p-3 bg-white rounded-md text-black outline-none" />
                <input type="email" placeholder="Your mail" className="p-3 bg-white rounded-md text-black outline-none" />
                <input type="tel" placeholder="Your phone" className="p-3 bg-white rounded-md text-black outline-none" />
                <textarea rows="3" placeholder="Your message" className="p-3 bg-white rounded-md text-black outline-none"></textarea>

                <button className="bg-blue-600 mt-2 hover:bg-blue-700 transition text-white w-[200px] cursor-pointer font-medium py-3 rounded-md md:text-base text-sm">
                    Send message
                </button>
            </div>

            {/* ----------------------- Featured Listing ------------------------------ */}
            <div className='md:mt-20 mt-15'>
                <h2 className='text-brand md:text-[28px] text-2xl font-bold mb-1'>Featured Listing</h2>
                <p className='text-[#000c] text-sm'>Leo morbi faucibus mattis pharetra tellus velit </p>

                <div className='mt-5 flex flex-col gap-y-5'>
                    {
                        realEstateData.slice(0 , 5).map((item , i)=>(
                            <div onClick={()=>handleNav(item)} key={i} className='flex items-center gap-2.5 group cursor-pointer'>
                                <img className='md:w-[160px] w-[150px] rounded-[12px] group-hover:scale-[1.05] duration-300' src={item.image} alt="House image" />

                                <div>
                                    <h2 className='text-brand font-semibold'>{item.title}</h2>
                                    <p className='text-[#000000bd] md:my-2 my-1 line-clamp-1'>{item.description}</p>
                                    <h2 className='text-brand font-semibold'>${item.price}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* ----------------------- Related property ------------------------------ */}
            <div className='md:mt-20 mt-15'>
                <h2 className='text-brand md:text-[28px] text-xl font-bold mb-1'>Related property</h2>
                <p className='text-[#000c] text-sm'>Leo morbi faucibus mattis pharetra tellus velit </p>

                <div className='mt-5 flex flex-col gap-y-5'>
                    {
                        realEstateData.slice(0 , 1).map((item , i)=>(
                            <div onClick={()=>handleNav(item)} className='cursor-pointer'>
                                <SingleHouseCard key={i} img={item.image} title={item.title} desc={item.description} price={item.price} beds={item.bedrooms} baths={item.bathrooms} area={item.totalArea} garages={item.elevator} label={item.label} />
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </section>
    )
}

export default DetailsRightSide