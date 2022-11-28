import React from 'react'
import { Circle } from '../components/Circle'
import { useAppSelector } from '../redux/hooks'

const HomePage = () => {
  const circles = useAppSelector((state) => state.circlesReducer)
  return (
    <div>
      <div id='gameContainer'>
        {circles ? circles.map(item => {
          return <Circle key={item.id} circle ={item}/>
        }) : <></>}
      </div>
    </div>
  )
}

export default HomePage