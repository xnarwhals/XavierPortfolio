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
            <button classNane="up" onClick={() => handleInput("Up")} />
            <button classNane="down" onClick={() => handleInput("Down")} />
            <button classNane="left" onClick={() => handleInput("Left")} />
            <button classNane="right" onClick={() => handleInput("Right")} />
            <button classNane="a" onClick={() => handleInput("A")} />
            <button classNane="b" onClick={() => handleInput("B")} />
            <button classNane="start" onClick={() => handleInput("Start")} />
            <button classNane="select" onClick={handleReset} />
        </div>
    </div>
  )
}


export default HomeGameBoy
