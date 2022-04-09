import React from 'react';
import Square from "./Square";

const Raw = (props) => {
    return (
        <div className='raw__wrapper'>
            {props.array.map(() => (
                <Square size={(props.num/100 * props.width)} />
            ))}
        </div>
    );
};

export default Raw;