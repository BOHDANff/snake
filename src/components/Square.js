import React, {useState} from 'react';

const Square = (props) => {
    const [body, setBody] = useState(false);
    return (
        <div className="square__wrapper"
             style={{
                 width: `${props.size}px`,
                 height: `${props.size}px`
             }}
        onClick={() => setBody(true)}>
            <div className="square"
                 style={{
                     width: `${props.size - 2}px`,
                     height: `${props.size - 2}px`,
                     backgroundColor: body? 'white': 'black'
                 }}>
            </div>
        </div>
    );
};

export default Square;