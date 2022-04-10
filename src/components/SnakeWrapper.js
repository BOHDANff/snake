import React from 'react';
import useResizeObserver from "@react-hook/resize-observer";
import Row from "./Row";
import {useDispatch, useSelector} from "react-redux";
import {keyControl, setSize} from "../store/reducers/SquareReducer";


const SnakeWrapper = (props) => {
    const size = useSelector(state => state.square.size);
    const dispatch = useDispatch();
    const matrix = useSelector(state => state.square.matrix)
    const root = props.rootRef
    useResizeObserver(root, entry => {
            let rootWidth = entry.contentRect.width
            if (rootWidth>1300) {
                dispatch(setSize(0.4 * rootWidth))
            } else if (rootWidth>1200) {
                dispatch(setSize(0.5 * rootWidth))
            } else if (rootWidth>900) {
                dispatch(setSize(0.55 * rootWidth))
            } else if (rootWidth>700) {
                dispatch(setSize(0.65 * rootWidth))
            } else {
                dispatch(setSize(0.8 * rootWidth))
            }
        }
    )
    return (
        matrix.length !== null &&
                <div className="App" ref={root}>
                    <div className="snake__wrapper"
                         style={{width: `${size}px`, height: `${size}px`}}
                         onKeyDown={event => dispatch(keyControl(event.key))}
                         tabIndex="0"
                         >
                        {matrix.map((el, i) =>
                            <Row key={i} rowSquares={el}/>)}
                    </div>
                </div>

    );
};

export default SnakeWrapper;