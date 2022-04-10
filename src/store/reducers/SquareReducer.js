import {createSlice} from "@reduxjs/toolkit";
import {createMatrix} from "../../functions/createMatrix";


const initialState = {
    size: 500,
    elemsNumber: 10,
    matrix: createMatrix(10),
}

export const squareSlice = createSlice({
    name: "square",
    initialState,
    reducers:{
        setSize(state, action){
            state.size = action.payload
        },
        setBody(state, action){
            const [x, y] = action.payload
            state.matrix[y][x].isBody = true
        },
        setMatrix(state, action){
            state.matrix = action.payload
        },
    }
})

export const {setSize, setBody, setMatrix} = squareSlice.actions
export default squareSlice.reducer