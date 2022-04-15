import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFirstBody} from "../store/reducers/SquareReducer";

const Square = (props) => {
    const wrapperSize = useSelector(state => state.square.size);
    const elemsNumber = useSelector(state => state.square.elemsNumber);
    const size = wrapperSize * elemsNumber/100;
    const dispatch = useDispatch();
    return (
        <div className="square__wrapper"
             style={{
                 width: `${size}px`,
                 height: `${size}px`
             }}
        onClick={() => dispatch(setFirstBody(props.id))}
            >
            <div className="square"
                 style={{
                     width: `${size - 2}px`,
                     height: `${size - 2}px`,
                     backgroundColor: props.isBody? 'white': props.isApple? 'red' : 'black'
                 }}>
            </div>
        </div>
    );
};

export default Square;