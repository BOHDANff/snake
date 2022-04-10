import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFirstBody} from "../store/reducers/SquareReducer";

const Square = (props) => {
    const wrapperSize = useSelector(state => state.square.size);
    const elemsNumber = useSelector(state => state.square.elemsNumber);
    const size = wrapperSize * elemsNumber/100;
    const matrix = useSelector(state => state.square.matrix);
    const [x,y] = props.id
    let isBody = matrix[y][x].isBody
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
                     backgroundColor: isBody? 'white': 'black'
                 }}>
            </div>
        </div>
    );
};

export default Square;