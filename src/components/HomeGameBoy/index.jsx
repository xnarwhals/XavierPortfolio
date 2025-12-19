import "./index.scss"
import { useState } from "react"


function HomeGameBoy() {
    const [inputs, setInputs] = useState([]);
    const [isKonamiUnlocked, setIsKonamiUnlocked] = useState(false);

    const KONAMI_CODE = ["Up", "Up", "Down", "Down", "Left", "Right", "Left", "Right", "B", "A", "Start"];

    const handleInput = (input) => {
        if (inputs.length >= 11) return; 

        const newInputs = [...inputs, input]; // append new input
        setInputs(newInputs);
    
        if (newInputs.slice(-KONAMI_CODE.length).join(",") === KONAMI_CODE.join(",")) {
            setIsKonamiUnlocked(true); // Unlock the Konami feature immediately
        }
    }

    const handleReset = () => {
        setInputs([]);
        setIsKonamiUnlocked(false);
    }

  return (
    <div className="home-gameboy">
        <div className="screen">
            {isKonamiUnlocked ? (
                <p>🎉 Konami Code Unlocked! 🎉</p> // This triggers the locked secret nav bar icon to becoome clickable
            ) : (
                <h3>INPUT: {inputs.join(", ")}</h3> // Show input 
            )}
            {inputs.length >= 11 && !isKonamiUnlocked && <p className="error">Try Again!</p> }
        </div>
        <div className="buttons">
            <button className="up" aria-label="Up" onClick={() => handleInput("Up")} />
            <button className="down" aria-label="Down" onClick={() => handleInput("Down")} />
            <button className="left" aria-label="Left" onClick={() => handleInput("Left")} />
            <button className="right" aria-label="Right" onClick={() => handleInput("Right")} />
            <button className="a" aria-label="A" onClick={() => handleInput("A")} />
            <button className="b" aria-label="B" onClick={() => handleInput("B")} />
            <button className="start" aria-label="Start" onClick={() => handleInput("Start")} />
            <button className="select" aria-label="Reset" onClick={handleReset} />
        </div>
    </div>
  )
}


export default HomeGameBoy
