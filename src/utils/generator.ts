import { Color, ICircle } from "../types/types";
import { innerWindowHeight, innerWindowWidth, MAX_SIZE } from "../values/constants";

export const generateNewCircles = (count: number) => {
    const colors: Color[] = ['red','green', 'yellow', 'orange']
    
    const circles: ICircle[] = []
    for(let i = 0; i < count; i++){
        let id = (Math.random() + 1).toString(36).substring(2)
        const colorID = parseInt((Math.random() * 3).toFixed(0))
        const circle: ICircle = {
            id,
            size: Math.random() * MAX_SIZE + 1,
            position: {
                x: Math.random() * innerWindowWidth,
                y: Math.random() * innerWindowHeight
            },
            color: colors[colorID],
            isHighlighted: false
        }
        circles.push(circle)
    }
    return circles
}