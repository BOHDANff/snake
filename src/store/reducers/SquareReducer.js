import {createSlice} from "@reduxjs/toolkit";
import {createMatrix} from "../../functions/createMatrix";
import {directionRuler} from "../../functions/keyControl";


const initialState = {
    size: 500,
    elemsNumber: 10,
    matrix: createMatrix(10),
    body: []
}

export const squareSlice = createSlice({
    name: "square",
    initialState,
    reducers:{
        setSize(state, action){
            state.size = action.payload
        },
        setFirstBody(state, action){
            if (!state.body.length) {

            }
            const [x, y] = action.payload
            state.matrix[y][x].isBody = true
            state.body.push(action.payload)
        },
        keyControl(state, action){
            if (state.body.length) {
                const keyName = action.payload;
                const [headX, headY] = state.body[0]
                if (keyName === "ArrowRight") {
                    directionRuler(headX, headY, 1, 0, state)
                } else if (keyName === "ArrowLeft") {
                    directionRuler(headX, headY, -1, 0, state)
                } else if (keyName === "ArrowUp") {
                    directionRuler(headX, headY, 0, -1, state)
                } else if (keyName === "ArrowDown") {
                    directionRuler(headX, headY, 0, 1, state)
                }
            }
    }
}})

export const {setSize, setFirstBody, keyControl,} = squareSlice.actions
export default squareSlice.reducer