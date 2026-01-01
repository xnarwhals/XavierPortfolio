import './index.scss';
import { useState } from 'react';
import QuestData from '@/data/QuestData';
import { CircleX, Lightbulb } from 'lucide-react';
import { useQuestProgress } from '@/context/QuestProgressContext';

const QuestMenu = ({ onClose }) => {
    const [activeHintId, setActiveHintId] = useState(null);
    const { completedCount, totalCount, completedQuestIds } = useQuestProgress();

    return (
        <div className='quest-menu'>
            <div className="quest-menu__header">
                <h2>Quest Log</h2>
                <button
                    className="quest-menu__close"
                    type="button"
                    aria-label="Close quest menu"
                    onClick={onClose}
                >
                    <CircleX size={26} />
                </button>
            </div>
            <p className="quest-menu__subtitle">Unlock Secret Page</p>
            <div className="quest-progress">
                <progress value={completedCount} max={totalCount}></progress>
                <span>{completedCount}/{totalCount}</span>
            </div>
            <p className='scroll-indicator-text'>Scroll for more</p>

            {/* quest cards  */}
            <div className='quest-cards-container'>
                {QuestData.map((quest) => {
                    const isDone = completedQuestIds.includes(quest.id);
                    return (
                    <div key={quest.id} className='quest-card'>
                        <h3>{quest.title}</h3>
                        <p className="quest-card__reward">Rewards 192 XP</p>
                        {/* completion status */}
                        {isDone ? (
                            <p className="quest-card__status quest-card__status--completed">Completed</p>
                        ) : (
                            <p className="quest-card__status quest-card__status--incomplete">Incomplete</p>
                        )}
                        <button
                            className="quest-card__icon"
                            type="button"
                            onClick={() =>
                                setActiveHintId((prev) => (prev === quest.id ? null : quest.id))
                            }
                            aria-label="Toggle hint"
                        >
                            <Lightbulb size={28} />
                        </button>

                        {/* Hint text  */}
                        {activeHintId === quest.id && (
                            <div className="quest-card__hint">
                                <p className='quest-card__hint-text'>{quest.hint}</p>
                                <button
                                    className="quest-card__hint-toggle"
                                    type="button"
                                    onClick={() => setActiveHintId(null)}
                                    aria-label="Close hint"
                                >
                                    <Lightbulb size={24} />
                                </button>
                            </div>
                        )}
                    </div>
                )})}
            </div>
        </div>
    )

}

export default QuestMenu
