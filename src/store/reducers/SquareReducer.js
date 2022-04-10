import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    size: 0,
    body: false,
    elemsNumber: 10,
}

export const squareSlice = createSlice({
    name: "square",
    initialState,
    reducers:{
        setSize(state, action){
            state.size = action.payload
        },
        isBody(state, action){
            state.body = action.payload
        },
    }
})

export const {setSize, isBody} = squareSlice.actions
export default squareSlice.reducer