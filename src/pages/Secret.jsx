import PageLayout from '../components/PageLayout'
import Header from '../components/Header'

import Stack from '@/components/ReactBits/Stack'
import AnimatedContent from '@/components/ReactBits/AnimatedContent'
import { useState, Suspense } from 'react'
import { PresentationControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { Model as BoosterPack } from '../components/BoosterPack';
import BoosterCard from '../components/BoosterCard'
import CardData from '../data/CardData'

import './Secret.scss'

function Secret() {
    const [selectedPack, setSelectedPack] = useState('Selva')
    const [openPack, setOpenPack] = useState(false)
    
    // Cards
    const [displayedCards, setDisplayedCards] = useState([])
    const [animationKey, setAnimationKey] = useState(0)

    const changePack = (packName) => {
      setSelectedPack(packName)
      setOpenPack(false)
      // reset displayed cards when changing pack
      setDisplayedCards([])
    }

    const getRandomUniqueIndices = (packName, count) => {
      const pack = CardData[packName] || []
      const max = pack.length
      const picks = new Set()
      while (picks.size < Math.min(count, max)) {
        picks.add(Math.floor(Math.random() * max))
      }
      return Array.from(picks)
    }

    const openSelectedPack = () => {
      setOpenPack(true)
      setAnimationKey((prev) => prev + 1)
      setDisplayedCards(getRandomUniqueIndices(selectedPack, 3))
    }

  return (
    <PageLayout
      kicker="Easter egg"
      title="Pack Select!"
      className="page--secret"
      feature={
        <div className='card-container'>
          <Header title='Card Packs' /> 
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 0, 10] }}> 
            <Environment preset="city" />
            <color attach="background" args={["#f7d774"]} />
            <Suspense fallback={null}>
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    // snap={{ mass: 4, tension: 1500 }} // no idea why it breaks now
                    polar={[-Math.PI / 8, Math.PI / 8]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}>
                    <BoosterPack position={[0,-0.4,0]} scale={1} cover={selectedPack} isOpen={openPack}/>
                </PresentationControls>
            </Suspense>
          </Canvas>
        </div>
      }
      children={
        <div className='secret-content'>
          <div className='left-buttons'>
            <button onClick={() => changePack('Selva')}>
              <span>Selva Pack</span>
            </button>
            <button onClick={() => changePack('Colorezz')}>
              <span>Colorezz Pack</span>
            </button>
            <button onClick={() => changePack('VPVR')}>
              <span>Apt510 Pack</span>
            </button>
            <button onClick={openSelectedPack}>
              <span>Open Pack!</span>
            </button>
          </div>
          <div className='display-container'>
            {openPack ? (
              <AnimatedContent
                key={`${selectedPack}-${animationKey}`}
                className="cards-animated"
                distance={100}
                duration={1}
                direction="vertical"
                reverse={true}
                ease="bounce.out"
                threshold={0}
                initialOpacity={0}
                animateOpacity={true}
              >
                <div className="stack-frame">
                  <Stack
                    randomRotation={false}
                    autoplay={false}
                    sendToBackOnClick={true}
                    cards={displayedCards.map((cardIndex) => (
                      <BoosterCard
                        key={`${selectedPack}-${cardIndex}`}
                        cardPack={selectedPack}
                        cardIndex={cardIndex}
                      />
                    ))}
                  />
                </div>
              </AnimatedContent>
            ) : (
              <div className='cards-placeholder' />
            )}
          </div>
        </div>
      }
    />
  )
}


export default Secret
