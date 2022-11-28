
export interface GameSettings{
    isGameRunning: boolean
}

export interface GameData {
    healthPoints: number
    scorePoints: number
    difficulty: number
    remainTime: number
}

export type Color = 'red' | 'green' | 'yellow' | 'orange'
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


