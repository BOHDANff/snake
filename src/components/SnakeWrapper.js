import React, {useRef, useState} from 'react';
import useResizeObserver from "@react-hook/resize-observer";
import Square from "./Square";
import Raw from "./Raw";

const SnakeWrapper = (props) => {
    const root = props.rootRef
    const [width, setWidth] = useState();
    const elemsNumber = 10;
    const array = (new Array(elemsNumber)).fill(1);
    useResizeObserver(root, entry => {
            let rootWidth = entry.contentRect.width
            if (rootWidth>1300) {
                setWidth(0.4 * rootWidth)
            } else if (rootWidth>1200) {
                setWidth(0.5 * rootWidth)
            } else if (rootWidth>900) {
                setWidth(0.55 * rootWidth)
            } else if (rootWidth>700) {
                setWidth(0.65 * rootWidth)
            } else {
                setWidth(0.8 * rootWidth)
            }
        }
    )
    return (
        <div className="App" ref={root}>
            <div className="snake__wrapper"
                 style={{width: `${width}px`, height: `${width}px`}}>
                {array.map(() => (
                    <Raw width={width} array={array} num={elemsNumber}/>
                ))}
            </div>
        </div>
    );
};

export default SnakeWrapper;