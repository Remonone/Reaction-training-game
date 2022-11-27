
export interface GameSettings{
    healthPoint: number
    isGameRunning: boolean
}

export interface ICircle{
    id: string
    size: number
    position: Point2D
    color: 'red' | 'green' | 'yellow' | 'orange'
    isHighlighted: boolean
    animation?: Point2D
    animation_name?: string
}

export interface Point2D{
    x: number
    y: number
}


