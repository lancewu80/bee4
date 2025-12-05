import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import ExpertAdvice from '../components/About/ExpertAdvice'
import Client from '../components/About/Client'
import Discover from '../components/About/Discover'
import Agents from '../components/About/Agents'
import Personalized from '../components/About/Personalized'

const About = () => {
  return (
    <>
      <AboutBanner />
      <ExpertAdvice />
      <Client />
      <Discover />
      <Agents />
      <Personalized />
    </>
  )
}

export default About