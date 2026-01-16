import './Achievements.scss'
import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import AchievementsData from '../data/AchievementsData'
import CertificateCard from '../components/CertificateCard'
import AchievementCard from '../components/AchievementCard'

import AnimatedContent from '../components/ReactBits/AnimatedContent'
import Header from '../components/Header'
import { useQuestProgress } from "@/context/QuestProgressContext";


function Achievements() {
  const { completeQuest } = useQuestProgress()
  const [lastAchievementClicked, setLastAchievementClicked] = useState(false)
  
  return (
    <PageLayout
      kicker="Xavier's Certificates"
      title="Just Getting Started!"
      className="page--achievements"
      feature={
        <div className='achievement-feature'>
          <Header title="Achievements" />
          <div className="achievement-container">
            {AchievementsData.achievements.map((achievement, index, list) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                onClick={
                  index === list.length - 1
                    ? () => {
                        setLastAchievementClicked(true)
                        completeQuest(3)
                      }
                    : undefined
                }
                isComplete={index === list.length - 1 && lastAchievementClicked}
              />
            ))}
          </div>
        </div>
      }
      children={
        <div className='certificate-board'>
          {AchievementsData.certificates.map((certificate) => (
            <AnimatedContent
              key={certificate.id}
              distance={200}
              direction="vertical"
              reverse={true}
              duration={0.8}
              ease="bounce.out"
              initialOpacity={0}
              scale={1.05}
              threshold={0.1}
              delay={0.4 * certificate.id}
            >
              <CertificateCard cert={certificate} />
            </AnimatedContent>
          ))}
        </div>
      }
    >
    </PageLayout>
  )
}

export default Achievements
