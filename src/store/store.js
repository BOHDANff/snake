import {combineReducers, configureStore} from "@reduxjs/toolkit";
import squareReducer from "./reducers/SquareReducer";


const rootReducer = combineReducers({
    square: squareReducer
});

export const store = configureStore({
    reducer: rootReducer
});