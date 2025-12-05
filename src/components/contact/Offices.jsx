import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleOffices from '../common/SingleOffices'

import office1 from '../../assets/office1.png'
import office2 from '../../assets/office2.png'
import office3 from '../../assets/office3.png'

const Offices = () => {
    const officeData = [
        {
            img: office1,
            name: 'Smoky Hollow',
            address: '9514 Smoky Hollow St. Sulphur, LA 70663',
            phone: 'Phone: (736) 267-8659',
            email: 'Email: munnascriptz@gmail.com'
        },
        {
            img: office2,
            name: 'North Road',
            address: '19 North Road Piscatory, NJ 08854',
            phone: 'Phone: (736) 267-8659',
            email: 'Email: rsmartin@gmail.com'
        },
        {
            img: office3,
            name: 'Rockville Ave',
            address: '8460 Rockville Ave. Greenville, NC 27834',
            phone: 'Phone: (736) 267-8659',
            email: 'Email: rsmartin@gmail.com'
        },
    ]
  return (
    <>
        <main id='Offices' className='md:mt-[112px] mt-[60px]'>
            <div className="container">
                <div id="Offices-Row">
                    <CommonHead head={'Our Offices'} text={'Pretium interdum risus risus facilisis cras pellentesque ipsum suspendisse '}/>

                    {/* -------------------------- Office cards --------------------------- */}
                    <div className='mt-12 flex items-center justify-between flex-wrap gap-y-6'>
                        {
                            officeData.map((item, i) => (
                                <SingleOffices key={i} img={item.img} name={item.name} location={item.address} phone={item.phone} email={item.email} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Offices