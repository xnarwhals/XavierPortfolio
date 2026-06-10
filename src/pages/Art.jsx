import './Art.scss'
import { useMemo, useState } from 'react'
import ART from '../data/Art'
import Header from '../components/Header'
import PageLayout from '../components/PageLayout'
import GoldButton from '../components/GoldButton'
import CircularGallery from '../components/ReactBits/CircularGallery'
import { useIsMobile } from '../hooks/useIsMobile'

function createArtSelections(activeIndex, setActiveIndex) {
    return ART.map((art, index) => ({
        id: art.id,
        label: art.title,
        title: art.title,
        description: art.description,
        selected: activeIndex === index,
        onSelect: () => setActiveIndex(index),
    }))
}

function getGalleryItemSize({
    viewport,
    visibleItems = 1,
    itemGap = 0,
    imageWidth,
    imageHeight,
}) {
    const targetHeight = viewport.height * 0.96
    const targetWidth = viewport.width / visibleItems - itemGap

    if (!imageWidth || !imageHeight) {
        return {
            width: targetWidth,
            height: targetHeight,
            gap: itemGap,
        }
    }

    const aspectRatio = imageWidth / imageHeight
    const widthAtTargetHeight = targetHeight * aspectRatio

    return {
        width: Math.min(targetWidth, widthAtTargetHeight),
        gap: itemGap,
    }
}

function Art() {
    const [activeIndex, setActiveIndex] = useState(0)
    const isMobile = useIsMobile()
    const activeArt = ART[activeIndex]
    const activePages = activeArt.pages
    const artSelections = createArtSelections(activeIndex, setActiveIndex)
    
    const galleryItems = useMemo(
        () => activePages.map((src, index) => ({
            image: src,
            text: `Page ${index + 1}`,
        })),
        [activePages]
    )


    return (
        <PageLayout
            kicker="#Not an Artist"
            title="Beauty is in The Eye of The Beholder"
            className="page--art"
            feature={(
                <div className='art-feature'>
                    <Header title="Design"/>
                    <ul className="art-select-item">
                        {artSelections.map((selection) => (
                            <li key={selection.id}>
                                <GoldButton
                                    label={selection.label}
                                    selected={selection.selected}
                                    onSelect={selection.onSelect}
                                    width="100%"
                                    aria-expanded={selection.selected}
                                    aria-controls={`art-selection-${selection.id}`}
                                />
                                {selection.selected && (
                                    <div
                                        className="art-select-detail"
                                        id={`art-selection-${selection.id}`}
                                    >
                                        <h1>{selection.title}</h1>
                                        <p>{selection.description}</p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            children={(
                <div className="showcase-area">
                    <div
                        className="showcase-stage"
                        style={{ '--showcase-bg': `url("${import.meta.env.BASE_URL}Imgs/Art/showcaseBG.svg")` }}
                        aria-hidden="true"
                    />
                    <div className="showcase-content">
                        <CircularGallery 
                            items={galleryItems}
                            bend={0}
                            visibleItems={isMobile ? 1 : 1.5}
                            itemSize={getGalleryItemSize}
                            itemGap={0.85}
                            borderRadius={0}
                            scrollSpeed={1.4}
                            scrollEase={0.1}
                            className="gallery"
                        />
                    </div>
                </div>
            )}
        />
    )
}

export default Art
