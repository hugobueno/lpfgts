import type { NextPage } from 'next'
import Header from '../src/components/Header'
import NavBar from '../src/components/NavBar'
import { GlobalContainer } from '../styles/GlobalComponents'
import ComoFunciona from '../src/components/ComoFunciona'
import Vantagens from '../src/components/Vantagens'
import QuemPode from '../src/components/QuemPode'
import Help from '../src/components/Help'
import Footer from '../src/components/Footer'

const Home: NextPage = () => {
  return (
    <GlobalContainer>
      <NavBar />
      <Header />
      <ComoFunciona />
      <Vantagens />
      <QuemPode />
      <Help />
      <Footer />
    </GlobalContainer>
  )
}
export default Home
