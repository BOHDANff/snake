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
            const [x, y] = action.payload
            if (!state.body.length) {
                state.matrix[y][x].isBody = true
                state.body.push(action.payload)
            } else {
                state.matrix[y][x].isApple = true
            }

        },
        keyControl(state, action){
            if (state.body.length) {
                const [headX, headY] = state.body[0]
                const direction = directionRuler(headX, headY, state)
                for (let i = state.body.length - 1; i > 0; i--) {
                    state.body[i] = state.body[i-1]
                }
                const keyName = action.payload;
                if (keyName === "ArrowRight") {
                    direction(1, 0)
                } else if (keyName === "ArrowLeft") {
                    direction(-1, 0)
                } else if (keyName === "ArrowUp") {
                    direction(0, -1)
                } else if (keyName === "ArrowDown") {
                    direction(0, 1)
                }
            }
    }
}})

export const {setSize, setFirstBody, keyControl,} = squareSlice.actions
export default squareSlice.reducer