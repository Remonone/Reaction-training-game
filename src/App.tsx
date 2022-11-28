import React, { useEffect, useState } from "react"
import HomePage from "./pages/HomePage"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

import './App.scss'
import { setGameRunning } from "./redux/reducers/gameSlice"
import { addTime } from "./redux/reducers/gameData"
import { MAX_DELAY } from "./values/constants"
import { generateNewCircles } from "./utils/generator"
import { addCircle } from "./redux/reducers/circles"
import HUD from "./components/HUD"
import StartUI from "./components/StartUI"
import EndUI from "./components/EndUI"


function App() {

  const dispatcher = useAppDispatch()

  const game = useAppSelector((state) => state.gameSlice)
  const gameData = useAppSelector((state) => state.gameReducer)
  
  const [timeToSpawn, setTimeToSpawn] = useState(Math.random() * MAX_DELAY * gameData.difficulty)
  const [gameHadStarted, setGameHadStarted] = useState(false)

  const stopGame = () => {
    setGameHadStarted(true)
    dispatcher(addTime(-gameData.remainTime))
    dispatcher(setGameRunning(false))
  }

  useEffect(()=> {
    const circles = generateNewCircles(40)
    for(let circle of circles) dispatcher(addCircle(circle))
  }, [dispatcher])

  // GAME LOOP
  useEffect(()=> {
    console.log(game.isGameRunning, gameHadStarted)
    const gameLoop = setInterval(() => {
      if(game.isGameRunning){
        dispatcher(addTime(-1))
      }
    }, 1000)
    return () => clearInterval(gameLoop)
    // eslint-disable-next-line
  }, [game.isGameRunning])

  
  // ON GAME LOOP CHANGE
  useEffect(()=> {
    if(!game.isGameRunning) return
    if(gameData.remainTime < 1)  return () => stopGame()
    if(gameData.healthPoints < 1) return () => stopGame()
    setTimeToSpawn(() => timeToSpawn-1)
    if(timeToSpawn < 1) {
      setTimeToSpawn(Math.random() * MAX_DELAY * gameData.difficulty)
      const circle = generateNewCircles(1)
      dispatcher(addCircle(circle[0]))
    }
    // eslint-disable-next-line
  }, [game, gameData])
  
  return (
    <div className="App">
      <div id="UI" className={`${game.isGameRunning ? 'hidden' : ''}`}>
        <StartUI isHidden={gameHadStarted}/>
        <EndUI isHidden={!gameHadStarted}/>
      </div>
      <HUD isGameRunning={game.isGameRunning}/>
      <HomePage/>
    </div>
  )
}

export default App
