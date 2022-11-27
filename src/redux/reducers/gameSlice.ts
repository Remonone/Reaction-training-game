import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameSettings } from "../../types/types";

const initialState: GameSettings[] = [{
    healthPoint: 3,
    isGameRunning: false
}]

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        decreaseHP: (state, action: PayloadAction<number>) => {
            let settings = JSON.parse(JSON.stringify(state))
            console.log("Settings before change: ", settings)
            settings[0].healthPoint -= action.payload
            if(settings[0].healthPoint < 1) settings[0].isGameRunning = false
            console.log("Settings after change: ", settings)
            return [...settings]
        }
    }
})


export const gameSlice = game.reducer

export const {decreaseHP} = game.actions