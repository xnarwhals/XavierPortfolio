import './index.scss'
import { useEffect, useRef } from 'react'
import { useQuestProgress } from '@/context/QuestProgressContext'

const Notification = () => {
  const { notifications } = useQuestProgress()
  const prevCountRef = useRef(0)

  useEffect(() => {
    if (notifications.length <= prevCountRef.current) {
      prevCountRef.current = notifications.length
      return
    }

    prevCountRef.current = notifications.length

    try {
      if (typeof window === 'undefined') return
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return
      const ctx = new AudioCtx()
      const oscillator = ctx.createOscillator()
      const gain = ctx.createGain()

      oscillator.type = 'triangle'
      oscillator.frequency.value = 640
      gain.gain.value = 0.08

      oscillator.connect(gain)
      gain.connect(ctx.destination)

      oscillator.start()
      oscillator.stop(ctx.currentTime + 0.18)

      oscillator.onended = () => {
        ctx.close()
      }
    } catch (error) {
      // Ignore audio errors (autoplay restrictions, etc.).
    }
  }, [notifications])

  if (!notifications.length) return null

  return (
    <div className="notification-stack" aria-live="polite">
      {notifications.map((item) => (
        <div key={item.id} className="notification">
          <div className="notification__icon" aria-hidden="true">
            🏆
          </div>
          <div className="notification__body">
            <p className="notification__title">Achievement unlocked</p>
            <p className="notification__message">{item.message}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Notification
