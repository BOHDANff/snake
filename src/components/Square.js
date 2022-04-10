import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isBody} from "../store/reducers/SquareReducer";

const Square = () => {
    const wrapperSize = useSelector(state => state.square.size);
    const elemsNumber = useSelector(state => state.square.elemsNumber);
    const size = wrapperSize * elemsNumber/100;
    const [body, setBody] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="square__wrapper"
             style={{
                 width: `${size}px`,
                 height: `${size}px`
             }}
        onClick={() => setBody(!body)}>
            <div className="square"
                 style={{
                     width: `${size - 2}px`,
                     height: `${size - 2}px`,
                     backgroundColor: body? 'white': 'black'
                 }}>
            </div>
        </div>
    );
};

export default Square;