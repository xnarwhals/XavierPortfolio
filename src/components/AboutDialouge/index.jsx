import './index.scss';
import { useState, useEffect, useMemo } from 'react';
import DialougeText from '@/data/DialougeText'; // binary tree structure for dialouge options
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CustomToggle from '../ReactUI/CustomToggle';
import TextType from '../ReactBits/TextType'; // all text in text-box displayed with this component (not choices/buttons)
import { useQuestProgress } from '@/context/QuestProgressContext';

const QUEST_STORAGE_KEY = 'aboutDialogueLeafs';
const QUEST_ID = 1;

const collectLeafIds = (node, acc = []) => {
    if (!node) return acc;
    if (node.end && node.id) {
        acc.push(node.id);
        return acc;
    }
    if (node.choices) {
        collectLeafIds(node.choices.left?.node, acc);
        collectLeafIds(node.choices.right?.node, acc);
    }
    return acc;
};

// SVG found online
function NamePlate({ name = 'Xavier' }) {
    return (
        <svg
            className="nameplate-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 220 56"
            shapeRendering="crispEdges"
        >
            <defs>
                <linearGradient id="plate-fill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0f0f0f" />
                    <stop offset="0.55" stopColor="#1c1c1c" />
                    <stop offset="1" stopColor="#0a0a0a" />
                </linearGradient>
                <linearGradient id="plate-gold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#ffd469" />
                    <stop offset="0.5" stopColor="#b8860b" />
                    <stop offset="1" stopColor="#6b4700" />
                </linearGradient>
            </defs>

            <rect x="2" y="2" width="216" height="52" fill="url(#plate-gold)" />
            <rect x="6" y="6" width="208" height="44" fill="url(#plate-fill)" />
            <rect x="8" y="8" width="204" height="40" fill="#0d0d0d" />

            <rect x="8" y="8" width="204" height="2" fill="#f2d57c" />
            <rect x="8" y="8" width="2" height="40" fill="#f2d57c" />
            <rect x="8" y="46" width="204" height="2" fill="#6b4700" />
            <rect x="210" y="8" width="2" height="40" fill="#6b4700" />

            <g transform="translate(18 20)" fill="#f7e7b3">
                <rect x="0" y="6" width="2" height="2" />
                <rect x="2" y="4" width="2" height="2" />
                <rect x="2" y="8" width="2" height="2" />
                <rect x="4" y="2" width="2" height="2" />
                <rect x="4" y="10" width="2" height="2" />
                <rect x="6" y="0" width="2" height="2" />
                <rect x="6" y="12" width="2" height="2" />
            </g>

            <text
                x="44"
                y="34"
                fill="#f7d774"
                fontSize="18"
                fontFamily="Pixel"
                letterSpacing="0.5"
            >
                {name}
            </text>
        </svg>
    );
}

function AboutDialouge() {
    const [currentNode, setCurrentNode] = useState(DialougeText.root);
    const [lineIndex, setLineIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [forceComplete, setForceComplete] = useState(false);
    const [forceCompleteToken, setForceCompleteToken] = useState(0);
    const [choicesArmed, setChoicesArmed] = useState(false);
    const [skipIntroEnabled, setSkipIntroEnabled] = useState(false);
    const { completeQuest } = useQuestProgress();

    const leafIds = useMemo(() => collectLeafIds(DialougeText.root), []);
    const [visitedLeafIds, setVisitedLeafIds] = useState(() => {
        try {
            const saved = localStorage.getItem(QUEST_STORAGE_KEY);
            const parsed = saved ? JSON.parse(saved) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    });

    const line = currentNode.lines[lineIndex] || '';
    const isEnd = currentNode.end || false;
    const hasChoices = Boolean(currentNode.choices) && !isEnd;
    const atEndOfLines = lineIndex >= currentNode.lines.length - 1;
    const isAtRoot = currentNode === DialougeText.root;
    const showChoices = (skipIntroEnabled && isAtRoot) || (
        hasChoices && atEndOfLines && isTypingComplete && choicesArmed
    );
    const showSkipIntro = true;

    useEffect(() => {
        setIsTypingComplete(false);
        setForceComplete(false);
        setChoicesArmed(false);
    }, [currentNode, lineIndex]);

    useEffect(() => {
        try {
            localStorage.setItem(QUEST_STORAGE_KEY, JSON.stringify(visitedLeafIds));
        } catch (error) {
            // Ignore storage errors.
        }
        if (leafIds.length > 0 && visitedLeafIds.length === leafIds.length) {
            completeQuest(QUEST_ID);
        }
    }, [visitedLeafIds, leafIds, completeQuest]);
    
    const handleNext = () => {
        if (!isTypingComplete) {
            // Remount TextType to guarantee any internal timers are cleared before force-completing.
            setForceCompleteToken((t) => t + 1);
            setForceComplete(true);
            return;
        }

        if (!atEndOfLines) {
            setLineIndex((prev) => prev + 1);
            return;
        }
        
        if (hasChoices) {
            setChoicesArmed(true);
            return;
        }

        if (currentNode.end) {
            if (currentNode.id && !visitedLeafIds.includes(currentNode.id)) {
                setVisitedLeafIds((prev) => [...prev, currentNode.id]);
            }
            if (skipIntroEnabled) {
                setCurrentNode(DialougeText.root);
                setLineIndex(0);
                setIsTypingComplete(true);
                setForceComplete(false);
                setChoicesArmed(true);
                return;
            }
            setCurrentNode(DialougeText.root);
            setLineIndex(0);
        }
    }

    const handleChoice = (side) => {
        if (!hasChoices) return;
        const next = currentNode.choices[side]?.node;
        if (!next) return;
        setCurrentNode(next);
        setLineIndex(0);
    }
    
    const handleSkipIntro = (nextValue) => {
        const nextSkipIntro =
            typeof nextValue === 'boolean' ? nextValue : !skipIntroEnabled;
        setSkipIntroEnabled(nextSkipIntro);
        if (!nextSkipIntro) {
            return;
        }
        if (!isAtRoot) {
            setCurrentNode(DialougeText.root);
        }
        setLineIndex(0);
        setIsTypingComplete(true);
        setForceComplete(false);
        setChoicesArmed(true);
    };

    return (
        <div className='dialouge-container'>
            <div className='head-icon'>
                <img src='/Imgs/Misc/Xavier.png'/>
                <NamePlate name="Xavier" />
            </div>
            <div className='dialouge-textbox'>
                {!showChoices ?
                    <TextType 
                        key={`${lineIndex}-${line}-${forceCompleteToken}`}
                        text={line}
                        loop={false}
                        deletingSpeed={0}
                        typingSpeed={25}
                        forceComplete={forceComplete}
                        onTypingComplete={() => {
                            setIsTypingComplete(true);
                            setForceComplete(false);
                        }}
                    />
                    : <div className='choices-container'>
                        <button className='choice-btn' onClick={() => handleChoice('left')}>
                            {currentNode.choices.left.label}
                        </button>
                        <button className='choice-btn' onClick={() => handleChoice('right')}>
                            {currentNode.choices.right.label}
                        </button>
                    </div>
                }
                {showSkipIntro && (
                    <div
                        className={`skip-intro-container${skipIntroEnabled ? ' is-active' : ''}`}
                    >
                        <span className="skip-intro-label" onClick={handleSkipIntro}>
                            Skip Intro
                        </span>
                        <CustomToggle checked={skipIntroEnabled} onChange={handleSkipIntro} />
                    </div>
                )}
                <button className='next-btn' onClick={handleNext}> <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
        </div>
    )
}


export default AboutDialouge;
