import PropTypes from "prop-types";
import ControlBoard from "./ControlBoard.jsx";
import { useState, useEffect } from "react";

const DrumPad = ({ pads }) => {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        const handleKeyPress = (event) => {
            const pad = pads.find(pad => pad.key === event.key.toUpperCase());
            if (pad) {
                playAudio(pad);
                const padElement = document.getElementById(pad.id);
                if (padElement) {
                    padElement.classList.add("pressed");
                    setTimeout(() => {
                        padElement.classList.remove("pressed");
                    }, 100);
                }
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [pads]);

    const handleClick = (pad) => {
        playAudio(pad);
    };

    const playAudio = (pad) => {
        const audioElement = document.getElementById(pad.key);
        if (audioElement) {
            audioElement.play();
            setDisplay(pad.id);
        }
    };

    return (
        <>
            <ControlBoard display={display} setDisplay={setDisplay} />
            <div className="drum-pads-container">
                {pads.map((pad, index) => (
                    <button
                        id={pad.id}
                        className="drum-pad"
                        key={index}
                        onClick={() => handleClick(pad)}
                    >
                        {pad.key}
                        <audio
                            id={pad.key}
                            className="clip"
                            src={pad.audioSrc}
                        ></audio>
                    </button>
                ))}
            </div>
        </>
    );
};

DrumPad.propTypes = {
    pads: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            audioSrc: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default DrumPad;
