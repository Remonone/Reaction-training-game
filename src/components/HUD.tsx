import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks'

const HUD = (props: {isGameRunning: boolean}) => {
    const gameData = useAppSelector((state) => state.gameReducer)
    const [remainTime, setRemainTime] = useState(0)
    useEffect(()=> {
        setRemainTime(props.isGameRunning ? gameData.remainTime : 0)
    }, [gameData])
    return (
        <div id='HUD'>
            <p id='HP'>Lives: {gameData.healthPoints}</p> 
            <p id='Score'>Score: {gameData.scorePoints}</p>
            <p id='Time'>Remain time: {remainTime.toFixed(0)}</p>
        </div>
    )
}

export default HUD