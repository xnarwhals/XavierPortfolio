import './index.scss'

function AchievementCard( { achievement } ) {

    return (
        <div className="achievement-card">
            <div className="achievement-media">
                <img className="a-icon" src={achievement.iconImg} alt={`${achievement.title} icon`} />
            </div>
            <div className="achievement-info">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
            </div>
            <div className="vertical-line" />
        </div>
    )
}

export default AchievementCard
