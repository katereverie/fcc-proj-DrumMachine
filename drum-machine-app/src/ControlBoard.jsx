import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


const ControlBoard = ( {display, setDisplay }) => {

    const [volume, setVolume] = useState(() => 70);
    const [isMuted, setIsMuted] = useState(() => false);
    
    useEffect(() => {

        const audioElements = document.getElementsByTagName("audio");

        Array.from(audioElements).forEach(audio => {
            audio.volume = isMuted ? 0: volume / 1000;
        });

    }, [volume, isMuted]);

    const handleVolumeChange = (e) => {

        const newVolume = e.target.value;

        setVolume(newVolume);
        setDisplay(`Volume: ${newVolume}`);
        setTimeout(() => {
            setDisplay('');
        }, 1200);
    }

    const handlePowerClick = () => {

        isMuted ? document.getElementById("power").classList.remove("off") : document.getElementById("power").classList.add("off");
        setIsMuted(prevState => !prevState);
    }

    return (
        <div className="control-board"> 
            <div id="display">
                {isMuted? 'On Mute': display}
            </div>
            <div id="volume-power-container">
                <input 
                    className="volume-slider" 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume}
                    onChange={handleVolumeChange} />
                <button 
                    id="power" 
                    onClick={handlePowerClick}>
                    <FontAwesomeIcon icon={faPowerOff} />
                </button>
            </div>
        </div>
    );
}

ControlBoard.propTypes = {
  display: PropTypes.string.isRequired,
  setDisplay: PropTypes.func.isRequired
}

export default ControlBoard;