import DrumMachine from './DrumMachine.jsx'
import './App.css'

const App = () => {

    return (
        <>
            <DrumMachine />
            <p>Did it work?</p>
            <footer>
                <p>
                    &copy; {new Date().getFullYear()} <span id="author">Katereverie</span>
                </p>
            </footer>
        </>

    )
}

export default App