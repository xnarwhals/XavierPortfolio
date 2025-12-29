import './index.scss';
import { useDrop } from "react-dnd";
import { useState } from "react";
import Screen from './Screen';

function Gameboy( { onCartridgeInsert } ) {
    const [curCartridge, setCurCartridge] = useState(null);
    const [screenContent, setScreenContent] = useState("home");

    const [sceneIndexUpDown, setScreenIndexUpDown] = useState(0); // up and down button functionality
    const verticalScenes = ["home", "languages", "extra", "frameworks", "design"];

    const [sceneIndexLeftRight, setScreenIndexLeftRight] = useState(0); // left and right button functionality
    const horizontalScenes = ["home", "experience", "platforms"];

    const [isTransitioning, setIsTransitioning] = useState(false);

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "CARTRIDGE",
        drop: (item) => {
            setCurCartridge(item);
            onCartridgeInsert?.(item);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [onCartridgeInsert]);

    const handleInput = (input) => {
        if (isTransitioning) return;
        
        const applyTransition = (newScreen) => {
            setIsTransitioning(true);
            setScreenContent("static");

            setTimeout(() => {
                setScreenContent(newScreen);
                setIsTransitioning(false);
            }, 400);
        }

        switch (input) {
            case "A":
                applyTransition("trailer")
                break;
            case "B":
                 applyTransition("itchio")
                break;
            case "Start":
                applyTransition("home")
                break;
            case "Select":
                applyTransition("credits")
                break;
            case "Up":
                setScreenIndexUpDown ((prevIndex) => {
                        const newIndex = (prevIndex - 1 + verticalScenes.length) % verticalScenes.length;
                        applyTransition(verticalScenes[newIndex]);
                        return newIndex;
                    })
                break;
            case "Down":
                setScreenIndexUpDown ((prevIndex) => {
                    const newIndex = (prevIndex + 1) % verticalScenes.length;
                    applyTransition(verticalScenes[newIndex]);
                    return newIndex;
                })
                break;
            case "Left":
                setScreenIndexLeftRight ((prevIndex) => {
                    const newIndex = (prevIndex - 1 + horizontalScenes.length) % horizontalScenes.length;
                    applyTransition(horizontalScenes[newIndex]);
                    return newIndex;
                })
                break;
            case "Right":
                setScreenIndexLeftRight ((prevIndex) => {
                    const newIndex = (prevIndex + 1) % horizontalScenes.length;
                    applyTransition(horizontalScenes[newIndex]);
                    return newIndex;
                })
                break;
            default:
                break;
        }
    }

    return (
        <div className="gameboy">
            <div className="screen">
                <Screen screenContent={screenContent} curCartridge={curCartridge} />
            </div>
            <div
                className={`cartridge-slot ${curCartridge ? 'cartridge-slot--loaded' : ''} ${isOver ? 'highlight' : ''}`}
                ref={dropRef}
            >
                {curCartridge ? (
                    <img
                        src={curCartridge.image}
                        alt={curCartridge.id}
                        className="cartridge-image"
                    />
                ) : (
                    <p className='empty-text'> Insert Cartridge Here</p>
                )}
            </div>
            <div className="buttons">
                <button className="up" aria-label="Up" onClick={() => handleInput("Up")} />
                <button className="down" aria-label="Down" onClick={() => handleInput("Down")} />
                <button className="left" aria-label="Left" onClick={() => handleInput("Left")} />
                <button className="right" aria-label="Right" onClick={() => handleInput("Right")} />
                <button className="a" aria-label="A" onClick={() => handleInput("A")} />
                <button className="b" aria-label="B" onClick={() => handleInput("B")} />
                <button className="start" aria-label="Start" onClick={() => handleInput("Start")} />
                <button className="select" aria-label="Reset" onClick={() => handleInput("Select")} />
            </div>
        </div>
    )

}


export default Gameboy
