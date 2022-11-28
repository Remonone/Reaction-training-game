import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { increaseDifficulty } from "../redux/reducers/gameData"
import { CIRCLES_PER_DIFFICULTY } from "../values/constants"

export const useDifficulty = () => {
    const dispatcher = useAppDispatch()
    const gameData = useAppSelector((state) => state.gameReducer)
    const [circlesPerDifficulty, setCirclesPerDifficulty] = useState(CIRCLES_PER_DIFFICULTY * gameData.difficulty)
    const [clickedCircles, setCirclesClicked] = useState(0)

    const onCircleClicked = () => {
        setCirclesClicked(clickedCircles+1)
        if(clickedCircles >= circlesPerDifficulty){
            dispatcher(increaseDifficulty())
            setCirclesClicked(0)
        }
    }

    useEffect(()=> {
        setCirclesPerDifficulty(CIRCLES_PER_DIFFICULTY * gameData.difficulty)
    }, [gameData.difficulty])

    return {circlesPerDifficulty, onCircleClicked}
}