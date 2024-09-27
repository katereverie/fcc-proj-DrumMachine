import DrumMachine from './DrumMachine.jsx'
import './App.css'

const App = () => {

    return (
        <>
            <DrumMachine />
            <footer>
                <p>
                    &copy; {new Date().getFullYear()} <span id="author">Katereverie</span>
                </p>
            </footer>
        </>

    )
}

export default App