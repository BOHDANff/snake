import React from 'react';
import Square from "./Square";
import {useSelector} from "react-redux";

const Raw = () => {
    const elemsNumber = useSelector(state => state.square.elemsNumber);
    const array = [...Array(elemsNumber).keys()]
    return (
        <div className='raw__wrapper'>
            {array.map((el, i) => (
                <Square key={i}/>
            ))}
        </div>
    );
};

export default Raw;