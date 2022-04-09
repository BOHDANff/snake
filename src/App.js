import './App.css';
import {useCallback, useRef, useState} from "react";
import useResizeObserver from "@react-hook/resize-observer";

function App() {
    const root = useRef(null);
    const [width, setWidth] = useState();
    useResizeObserver(root, entry => {
        let rootWidth = entry.contentRect.width
        if (rootWidth>1300) {
            setWidth((0.4 * rootWidth))
        } else if (rootWidth>1200) {
            setWidth((0.5 * rootWidth))
        } else if (rootWidth>900) {
            setWidth((0.55 * rootWidth))
        } else if (rootWidth>700) {
            setWidth((0.65 * rootWidth))
        } else {
            setWidth((0.8 * rootWidth))
        }
        }
    )
    return (
    <div className="App" ref={root}>
        <div className="snake__wrapper" style={{width: `${width}px`,
            height: `${width}px`}}>
        </div>

    </div>
  );
}

export default App;
