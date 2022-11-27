import React, { useEffect } from "react"
import HomePage from "./pages/HomePage"
import { useAppDispatch, useAppSelector } from "./redux/hooks"
import { addCircle } from "./redux/reducers/circles"
import { ICircle } from "./types/types"

import './App.scss'

function App() {
  const dispatcher = useAppDispatch()
  const gameSettings = useAppSelector((state) => state.gameSlice)
  const preset: ICircle[] = [{
    id: '0',
    size: 3,
    position: {
      x: 300,
      y: 500
    },
    color: 'green',
    isHighlighted: false
  },
  {
    id: '1',
    size: 1,
    position: {
      x: 600,
      y: 200
    },
    color: 'red',
    isHighlighted: true
  }]
  useEffect(() => {
    preset.forEach(item => dispatcher(addCircle(item)))
  }, [preset, dispatcher])
  return (
    <div className="App">
      <div id='HUD'>
        <p id='HP'>Lives: {gameSettings[0].healthPoint}</p> 
      </div>
      <HomePage/>
    </div>
  )
}

export default App
