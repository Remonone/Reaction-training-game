import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addCircle, highlightCircle, resetCircles } from '../redux/reducers/circles'
import { resetScore, setHP, setTime } from '../redux/reducers/gameData'
import { setGameRunning } from '../redux/reducers/gameSlice'
import { generateNewCircles } from '../utils/generator'
import { START_TIME } from '../values/constants'

const EndUI = (props: {isHidden: boolean}) => {
    const data = useAppSelector((state) => state.gameReducer)
    const dispatcher = useAppDispatch()
    const handleRestart = () => {
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

        dispatcher(resetScore())
    }
  return (
    <div className={`end-menu ${props.isHidden ? 'hidden' : ''}`}>
        <p>Game Over!</p>
        <p>You have scored: {data.scorePoints}</p>
        <button onClick={() => handleRestart()}>Restart?</button>
    </div>
  )
}

export default EndUI