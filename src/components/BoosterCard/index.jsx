import './index.scss'
import CardData from '@/data/CardData'
import { Tv, Fish, Donut, Code, Apple, Droplet, Crosshair, Palette,
    Zap, Music, Crown, Drumstick, GamepadDirectional, Footprints, Clapperboard, Star
} from 'lucide-react';


// CardData.cardPacks = { Selva: [...], VPVR: [...], Colorezz: [...] }
function BoosterCard({ cardPack, cardIndex = 0 }) {
    const baseUrl = import.meta.env.BASE_URL
    const cardBackgrounds = {
        Selva: `${baseUrl}Imgs/Cards/CardSelva.png`,
        VPVR: `${baseUrl}Imgs/Cards/CardVPVR.png`,
        Colorezz: `${baseUrl}Imgs/Cards/CardColorezz.png`,
    }

    const iconMap = {
        Tv,
        Fish,
        Donut,
        Code,
        Apple,
        Droplet,
        Crosshair,
        Palette,
        Zap,
        Music,
        Crown,
        Drumstick,
        GamepadDirectional,
        Footprints,
        Clapperboard,
    }

    const cardData = CardData[cardPack]?.[cardIndex]
    const Icon = cardData ? iconMap[cardData.icon] : null
    const rarityMap = {
        Common: 1,
        Rare: 2,
        Epic: 3
    }
    const rarityCount = cardData ? rarityMap[cardData.rarity] || 0 : 0

    return (
        <div className='booster-card'>
            <div 
                className='booster-card__background'
                style={{ backgroundImage: `url(${cardBackgrounds[cardPack]})` }}
            />
            {cardData && (
                <div className='booster-card__content'>
                    <div className='booster-card__icon'>
                        {Icon && <Icon aria-hidden size={100} strokeWidth={2} />}
                    </div>
                    <div className='booster-card__prompt'>{cardData.prompt}</div>
                    <div className='booster-card__answer'>{cardData.answer}</div>
                    <div className='booster-card__rarity' aria-label={`Rarity: ${cardData.rarity}`}>
                        {Array.from({ length: rarityCount }).map((_, i) => (
                            <Star key={i} size={30} strokeWidth={3} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

}

export default BoosterCard
