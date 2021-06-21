import React, {useState} from 'react'
import './App.css'
import DisplayComponent from "./components/DisplayComponents";
import ButtonDisplayComponent from "./components/ButtonDisplayComponent";

function App() {
    const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0})
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState(0)

    const startTime = () => {

        run()
        setStatus(1)
        setInterv(setInterval(run, 10))
    }

    const stopTime = () => {
        clearInterval(interv)
        setStatus(2)
    }

    const resetTime = () => {
        clearInterval(interv)
        setStatus(0)
        setTime({ms: 0, s: 0, m: 0, h: 0})
    }

    const resumeTime = () => {
        startTime()
    }

    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h
    const run = () => {
        if (updatedM === 60) {
            updatedH++
            updatedM = 0

        }

        if (updatedS === 60) {
            updatedM++
            updatedS = 0
        }
        if (updatedMs === 100) {
            updatedS++
            updatedMs = 0
        }
        updatedMs++

     return setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH})
    }

    return (
        <div className="main-section">
            <div className='clock-holder'>
                <div className='stopwatch'>
                    <DisplayComponent time={time}/>
                    <ButtonDisplayComponent  status={status} resume={resumeTime} stop={stopTime}  startTime={startTime}
reset={resetTime}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
