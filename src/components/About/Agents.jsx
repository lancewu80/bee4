import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleAgent from '../common/SingleAgent'
import agent1 from '../../assets/agent1.png'
import agent2 from '../../assets/agent2.png'
import agent3 from '../../assets/agent3.png'
import agent4 from '../../assets/agent4.png'

const Agents = () => {
  return (
    <>
        <main id='Agents' className='mt-[120px]'>
            <div className="container">
                <div id="Agents-Row">
                    <CommonHead head={'Our professional agents'} text={'Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus'}/>
                
                    {/* --------------------- Agents -------------------- */}
                    <section className='mt-10 flex items-center justify-between gap-y-6 flex-wrap'>
                        <SingleAgent img={agent1} name={'Terrell Norman'} role={'Real estate agent'}/>
                        <SingleAgent img={agent2} name={'Terrell Norman'} role={'Real estate agent'}/>
                        <SingleAgent img={agent3} name={'Terrell Norman'} role={'Real estate agent'}/>
                        <SingleAgent img={agent4} name={'Terrell Norman'} role={'Real estate agent'}/>
                    </section>
                </div>
            </div>
        </main>
    </>
  )
}

export default Agents