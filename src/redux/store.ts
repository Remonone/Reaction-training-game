import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { circlesReducer } from "./reducers/circles"
import { gameReducer } from "./reducers/gameData"
import { gameSlice } from "./reducers/gameSlice"

export const store = configureStore({
  reducer: {
    circlesReducer,
    gameSlice,
    gameReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
