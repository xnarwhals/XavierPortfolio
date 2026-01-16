import './index.scss'
import { ArrowBigUpDash, ShoppingCart, Bot, School, GraduationCap, Trophy } from 'lucide-react';

const ICONS = { ArrowBigUpDash, ShoppingCart, Bot, School, GraduationCap, Trophy };

function AchievementCard( { achievement, onClick, isComplete } ) {
    const Icon = ICONS[achievement.lucidIcon] || null;
    
    return (
        <div className={`achievement-card${isComplete ? ' is-complete' : ''}`} onClick={onClick}>
            <div className="achievement-media">
                <img className="a-icon" src={achievement.iconImg} alt={`${achievement.title} icon`} />
                {Icon ? <Icon /> : null}
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
