import type { NextPage } from 'next'
import Header from '../src/components/Header'
import NavBar from '../src/components/NavBar'
import { GlobalContainer } from '../styles/GlobalComponents'
import Vector from '../public/assets/Vector.svg'
import Image from 'next/image'
import ComoFunciona from '../src/components/ComoFunciona'
import Vantagens from '../src/components/Vantagens'
import QuemPode from '../src/components/QuemPode'
import Help from '../src/components/Help'
import Footer from '../src/components/Footer'
import NavMobile from '../src/components/NavMobile'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {

  const [isMobile, setIsMobile] = useState(false)

  
  useEffect(()=>{
    window.innerWidth < 1000 ? setIsMobile(true) : setIsMobile(false)
  }, [isMobile])
  console.log(isMobile);

  return (
    <GlobalContainer>
      {isMobile ? <NavMobile /> : <NavBar />}
      <Header />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 100"><path fill="#6AD59D" fill-opacity="1" d="M0,0L120,5.3C240,11,480,21,720,64C960,107,1200,181,1320,218.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <ComoFunciona />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 150"><path fill="#6AD59D" fill-opacity="1" d="M0,64L120,69.3C240,75,480,85,720,106.7C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <Vantagens />
      <QuemPode />
      <Help />
      <Footer />
      {/* 
      */}
    </GlobalContainer>
  )
}

export default Home
