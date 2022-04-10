import './App.css';
import {useRef} from "react";
import SnakeWrapper from "./components/SnakeWrapper";

function App() {
    const root = useRef(null);
    return (
    <div ref={root}>
        <SnakeWrapper rootRef={root}/>
    </div>
  );
}

export default App;
