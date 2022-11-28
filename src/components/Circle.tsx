import React from 'react'
import { useDifficulty } from '../hooks/difficulty'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addCircle, highlightCircle, removeCircle } from '../redux/reducers/circles'
import { addScore, addTime, decreaseHP } from '../redux/reducers/gameData'
import { ICircle } from '../types/types'
import { generateNewCircles } from '../utils/generator'
import { Colors, REWARD_PER_CLICK } from '../values/constants'

export const Circle = (props: {circle: ICircle}) => {
  const dispatcher = useAppDispatch()
  const gameData = useAppSelector((state) => state.gameReducer)
  const circles = useAppSelector((state)=> state.circlesReducer)
  const {onCircleClicked} = useDifficulty()

  const calculateScore = () => Math.round(REWARD_PER_CLICK / props.circle.size * gameData.difficulty)

  const calculateAdditionalTime = () => parseInt((Math.pow(0.857, gameData.difficulty - 1 ) * 2).toFixed(1))

  const highlightNext = () => {
    const pos = Math.round((Math.random() * (circles.length - 1)))
    const circleID = circles[pos].id
    if(circleID === props.circle.id) {
      highlightNext()
      return
    }
    dispatcher(highlightCircle(circleID))
  }

  const handleClick = () => {
    //Re-generate a circle
    dispatcher(removeCircle(props.circle.id)) 
    const circles = generateNewCircles(1)
    circles.map(item => dispatcher(addCircle(item)))

    // Result of click logic
    if(!props.circle.isHighlighted){
      dispatcher(decreaseHP(1))
      return
    }
    const score = calculateScore()
    
    dispatcher(addScore(score))
    const additionalTime = calculateAdditionalTime()
    console.log(additionalTime)
    dispatcher(addTime(additionalTime))
    highlightNext()
    onCircleClicked()
  }


  return (
    <div className={`circle ${props.circle.isHighlighted ? 'highlight' : ''}`} style={
      {
        top: props.circle.position.y,
        left: props.circle.position.x,
        width: 20*props.circle.size, 
        height: 20*props.circle.size, 
        background: Colors[props.circle.color]
      }
    }
    onClick={()=>handleClick()}></div>
  )
}
