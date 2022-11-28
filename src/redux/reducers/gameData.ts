import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameData } from "../../types/types";

const initialState: GameData = {
    healthPoints: 0,
    scorePoints: 0,
    difficulty: 1,
    remainTime: 0 // In seconds
}

const gameData = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
        setHP: (state, action: PayloadAction<number>) => void(state.healthPoints = action.payload),
        decreaseHP: (state, action: PayloadAction<number>) => void(state.healthPoints-=action.payload),
        addScore: (state, action: PayloadAction<number>) => void(state.scorePoints += action.payload),
        resetScore: (state) => void(state.scorePoints = 0),
        addTime: (state, action: PayloadAction<number>) => void(state.remainTime += action.payload),
        setTime: (state, action: PayloadAction<number>) => void(state.remainTime = action.payload),
        increaseDifficulty: (state) => void(state.difficulty++),
        resetDifficulty: (state) => void(state.difficulty = 1)
    }
})

export const gameReducer = gameData.reducer

export const {decreaseHP, setHP, addScore, increaseDifficulty, addTime, setTime, resetScore} = gameData.actions