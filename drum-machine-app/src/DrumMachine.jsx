import DrumPad from "./DrumPad.jsx";

const DrumMachine = () => {
    
    const drumPads = [
        {id: "heater-1", key: "Q", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"},
        {id: "heater-2", key: "W", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"},
        {id: "heater-3", key: "E", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"},
        {id: "heater-4", key: "A", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"},
        {id: "clap", key: "S", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"},
        {id: "open-hh", key: "D", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"},
        {id: "kick-n-hat", key: "Z", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"},
        {id: "kick", key: "X", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"},
        {id: "closed-hh", key: "C", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"}
    ];
    
    return (
        <div id="drum-machine">
            <DrumPad pads={drumPads}/>
        </div>
    );
}

export default DrumMachine;