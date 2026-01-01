import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import QuestData from '@/data/QuestData'

// This is the key we use in the browser's localStorage.
const STORAGE_KEY = 'questProgress'

// React Context lets any component read/update quest progress
// without passing props down through many layers.
const QuestProgressContext = createContext(null)

export function QuestProgressProvider({ children }) {
  // We store only the IDs of completed quests.
  // This state lives in memory while the app is running.
  // The initializer function runs once on first mount to load saved progress.
  const [completedQuestIds, setCompletedQuestIds] = useState(() => {
    try {
      // localStorage only exists in the browser.
      if (typeof window === 'undefined' || !window.localStorage) return []

      // Read the saved JSON string (or null if nothing saved yet).
      const saved = window.localStorage.getItem(STORAGE_KEY)

      // Convert JSON string -> JS value.
      const parsed = saved ? JSON.parse(saved) : []

      // We expect an array of quest IDs; anything else means “start fresh”.
      return Array.isArray(parsed) ? parsed : []
    } catch (error) {
      // If JSON is corrupted or storage is blocked, fail safely.
      return []
    }
  })

  // Whenever `completedQuestIds` changes, persist it to localStorage.
  useEffect(() => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return

      // localStorage values must be strings, so we store JSON.
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(completedQuestIds)
      )
    } catch (error) {
      // Ignore write errors (private mode / quota).
    }
  }, [completedQuestIds])

  // Derived stats used by UI.
  const totalCount = QuestData.length
  const completedCount = completedQuestIds.length
  const allCompleted = completedCount >= totalCount && totalCount > 0

  // `value` is what consumers of this context receive.
  // useMemo prevents unnecessary re-renders in consumers when the value
  // would otherwise be a new object every render.
  const value = useMemo(
    () => ({
      completedQuestIds,
      completedCount,
      totalCount,
      allCompleted,

      // Mark a quest complete by ID (adds it once; no duplicates).
      completeQuest: (id) =>
        setCompletedQuestIds((prev) =>
          prev.includes(id) ? prev : [...prev, id]
        ),

      // Clear all progress.
      resetQuests: () => setCompletedQuestIds([]),
    }),
    [completedQuestIds, completedCount, totalCount, allCompleted]
  )

  return (
    <QuestProgressContext.Provider value={value}>
      {children}
    </QuestProgressContext.Provider>
  )
}

// Convenience hook so components can do:
//   const { completedCount, completeQuest } = useQuestProgress()
export function useQuestProgress() {
  const ctx = useContext(QuestProgressContext)
  if (!ctx) {
    throw new Error('useQuestProgress must be used within QuestProgressProvider')
  }
  return ctx
}
