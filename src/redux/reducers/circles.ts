import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICircle } from "../../types/types";

const initialState: ICircle[] = [] 


const circles = createSlice({
    name: 'circles',
    initialState,
    reducers: {
        addCircle: (state, action: PayloadAction<ICircle>) => {
            if(state.find(circle => circle.position === action.payload.position)) return state
            return [...state, action.payload]
        },
        removeCircle: (state, action: PayloadAction<string>) => {
            return state.filter(circle => circle.id !== action.payload)
        },
        highlightCircle: (state, action: PayloadAction<string>) => {
            let circle = state.find(circle => circle.id === action.payload)
            if(circle){
                let circles = state.filter(item => item.id !== action.payload)
                circle.isHighlighted = true
                return [...circles, circle]
            }
            return state
        },
        resetCircles: (state) => {
            return []
        }
    }
})

export const circlesReducer = circles.reducer 
export const {addCircle, removeCircle, highlightCircle, resetCircles} = circles.actions