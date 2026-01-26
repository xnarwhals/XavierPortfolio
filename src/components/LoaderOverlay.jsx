import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import './LoaderOverlay.scss'

function LoaderOverlay({ isActive }) {
  if (!isActive) return null

  return (
    <div className="loader-overlay" role="status" aria-live="polite">
      <div className="loader-overlay__card">
        <DotLottieReact
          src="https://lottie.host/d88cafce-4ef0-4eae-8a57-05d3c2cfeb22/mPtO6hVxfy.lottie"
          autoplay
          loop
        />
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default LoaderOverlay
