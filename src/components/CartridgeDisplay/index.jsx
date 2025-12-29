import './index.scss';
import AnimatedContent from '../ReactBits/AnimatedContent';
import { useState } from 'react';
import cartridgeData from '@/data/CartridgeData';
import Cartridge from './Cartridge';

function CartridgeDisplay() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isReversed, setIsReversed] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const total = cartridgeData.length;

    const goPrev = () => {
        setIsReversed(true);
        setAnimationKey((prev) => prev + 1);
        setActiveIndex((prev) => (prev - 1 + total) % total);
    };

    const goNext = () => {
        setIsReversed(false);
        setAnimationKey((prev) => prev + 1);
        setActiveIndex((prev) => (prev + 1) % total);
    };

    const activeCartridge = cartridgeData[activeIndex];

    return (
        <div className="cartridge-carousel">
            <div className="cartridge-carousel__viewport">
                {activeCartridge && (
                    <AnimatedContent
                        key={`${activeCartridge.id}-${animationKey}`}
                        distance={100}
                        direction="horizontal"
                        reverse={!isReversed}
                        duration={1}
                        ease="bounce.out"
                        initialOpacity={0}
                        scale={0.98}
                        threshold={0}
                    >
                        <div className="cartridge-carousel__slide">
                            <Cartridge game={activeCartridge} />
                        </div>
                    </AnimatedContent>
                )}
            </div>
            <div className="cartridge-carousel__controls">
                <button
                    type="button"
                    className="grid h-10 w-30 place-items-center border border-yellow-400/35 bg-black/70 text-lg text-yellow-100 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-50 hover:shadow-[0_0_18px_rgba(255,215,0,0.25)]"
                    onClick={goPrev}
                    aria-label="Previous cartridge"
                >
                    ←
                </button>
                <button
                    type="button"
                    className="grid h-10 w-30 place-items-center border border-yellow-400/35 bg-black/70 text-lg text-yellow-100 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-50 hover:shadow-[0_0_18px_rgba(255,215,0,0.25)]"
                    onClick={goNext}
                    aria-label="Next cartridge"
                >
                    →
                </button>
            </div>
        </div>
    )
}

export default CartridgeDisplay
