import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { decreaseHP } from '../redux/reducers/gameSlice'
import { ICircle } from '../types/types'
import { Colors } from '../values/constants'

export const Circle = (props: {circle: ICircle}) => {
  const dispatcher = useAppDispatch()
  const handleClick = () => {
    if(!props.circle.isHighlighted){
      dispatcher(decreaseHP(1))
    }
  }
  return (
    <div className={`circle ${props.circle.isHighlighted ? 'highlight' : ''}`} style={
      {
        top: props.circle.position.x,
        left: props.circle.position.y,
        width: 20*props.circle.size, 
        height: 20*props.circle.size, 
        background: Colors[props.circle.color]
      }
    }
    onClick={()=>handleClick()}></div>
  )
}
