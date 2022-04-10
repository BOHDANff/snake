import React from 'react';
import useResizeObserver from "@react-hook/resize-observer";
import Raw from "./Raw";
import {useDispatch, useSelector} from "react-redux";
import {setSize} from "../store/reducers/SquareReducer";

const SnakeWrapper = (props) => {
    const size = useSelector(state => state.square.size);
    const elemsNumber = useSelector(state => state.square.elemsNumber);
    const array = [...Array(elemsNumber).keys()]
    const dispatch = useDispatch();
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
        <div className="App" ref={root}>
            <div className="snake__wrapper"
                 style={{width: `${size}px`, height: `${size}px`}}>
                {array.map((el, i) => (
                    <Raw key={i}/>
                ))}
            </div>
        </div>
    );
};

export default SnakeWrapper;