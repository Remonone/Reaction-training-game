import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameSettings } from "../../types/types";

const initialState: GameSettings = {
    isGameRunning: false,
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
         setGameRunning: (state, action: PayloadAction<boolean>) => {
            const gameSet = Object.assign(state)
            gameSet.isGameRunning = action.payload
            return gameSet
         }
    }
})


export const gameSlice = game.reducer

export const {setGameRunning} = game.actions