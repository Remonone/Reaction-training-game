import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { addCircle, highlightCircle, resetCircles } from '../redux/reducers/circles'
import { setHP, setTime } from '../redux/reducers/gameData'
import { setGameRunning } from '../redux/reducers/gameSlice'
import { generateNewCircles } from '../utils/generator'
import { START_TIME } from '../values/constants'

const StartUI = (props: {isHidden: boolean}) => {
    const dispatcher = useAppDispatch()
    const handleStart = () => {
        dispatcher(setGameRunning(true))
        dispatcher(resetCircles())
        const circles = generateNewCircles(50)
        for(let circle of circles){
            dispatcher(addCircle(circle))
        }
        dispatcher(setHP(3))
        dispatcher(setTime(START_TIME))
        const pos = Math.round((Math.random() * (circles.length - 1)))
        const circleID = circles[pos].id
        dispatcher(highlightCircle(circleID))
    }
  return (
        <div className={`start-menu ${props.isHidden ? 'hidden' : ''}`}>
            <p>Start game?</p>
            <button onClick={() => handleStart()}>Start</button>
        </div>
  )
}

export default StartUI