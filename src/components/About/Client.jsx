import React from 'react'
import CommonHead from '../common/CommonHead'
import client1 from '../../assets/clientIcon1.png'
import client2 from '../../assets/clientIcon2.png'
import client3 from '../../assets/clientIcon3.png'

const Client = () => {
    return (
        <>
            <main id='Client' className='md:mt-[120px] mt-[80px]'>
                <div className="container">
                    <div id="Client-Row">
                        <CommonHead head={'Our client’s success is our success.'} text={'Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu urna eget'} />

                        {/* ------------------------ Cards ------------------------ */}
                        <section className='mt-12 flex items-center md:justify-center justify-start gap-6 flex-wrap'>
                            <div data-aos="fade-up"
                                className="flex flex-col gap-[30px] items-center text-center bg-[#0b0d28] border border-blue-800 rounded-xl p-8 w-[340px] shadow-lg hover:scale-105 transition">
                                <div className="text-4xl"><img src={client1} alt="Icon" /></div>
                                <h3 className="text-2xl font-semibold text-white">Buy a property</h3>
                                <p className="text-white text-base">
                                    Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus.
                                    Porttitor fermentum eu.
                                </p>
                                <button className="bg-blueTxt text-white hover:bg-blue-700 transition w-[200px] py-3 rounded-md font-medium cursor-pointer">
                                    Find a property
                                </button>
                            </div>
                            <div data-aos="fade-up"
                                className="flex flex-col gap-[30px] items-center text-center bg-[#0b0d28] border border-blue-800 rounded-xl p-8 w-[340px] shadow-lg hover:scale-105 transition">
                                <div className="text-4xl"><img src={client2} alt="Icon" /></div>
                                <h3 className="text-2xl font-semibold text-white">Sell a property</h3>
                                <p className="text-white text-base">
                                    Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus.
                                    Porttitor fermentum eu.
                                </p>
                                <button className="bg-blueTxt text-white hover:bg-blue-700 transition w-[200px] py-3 rounded-md font-medium cursor-pointer">
                                    Learn more
                                </button>
                            </div>
                            <div data-aos="fade-up"
                                className="flex flex-col gap-[30px] items-center text-center bg-[#0b0d28] border border-blue-800 rounded-xl p-8 w-[340px] shadow-lg hover:scale-105 transition">
                                <div className="text-4xl"><img src={client3} alt="Icon" /></div>
                                <h3 className="text-2xl font-semibold text-white">Rent a property</h3>
                                <p className="text-white text-base">
                                    Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus.
                                    Porttitor fermentum eu.
                                </p>
                                <button className="bg-blueTxt text-white hover:bg-blue-700 transition w-[200px] py-3 rounded-md font-medium cursor-pointer">
                                    Find a rent
                                </button>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Client