import React from 'react';
import Square from "./Square";

const Row = (props) => {
    return (
        <div className='raw__wrapper'>
            {props.rowSquares.map((el, i) => (
                <Square key={i} id={el.id} isBody={el.isBody} isApple={el.isApple}/>
            ))}
        </div>
    );
};

export default Row;