import './Portfolio.scss'
import { useState } from 'react'
import PageLayout from '../components/PageLayout'

import Header from '../components/Header'
import How2Play from '../components/How2Play'
import CartridgeDisplay from '../components/CartridgeDisplay'
import Gameboy from '../components/Gameboy'


function Portfolio() {
  const [showHow2Play, setShowHow2Play] = useState(true)

  const handleToggle = () => {
    setShowHow2Play((prev) => !prev)
  }

  return (
    <PageLayout
      kicker="Interactive Portfolio"
      title="Version 2.0"
      className="page--portfolio"
      feature={
        <div className='portfolio-feature'>
          <Header title={showHow2Play ? 'How To Play' : 'Cartridges'} /> 
          {showHow2Play ? <How2Play /> : <CartridgeDisplay />}
          <button onClick={handleToggle} className='swap-btn'>
            {showHow2Play ? 'Show Cartridges' : 'Show Controls'}
          </button>
        </div>
      }
      children={
        <div className="main-content">
          <Gameboy />
        </div>
      }
      footer={
        <p className="footer-note">
          Pixel Overworld goes here!
        </p>
      }
    >
    </PageLayout>
  )
}

export default Portfolio
