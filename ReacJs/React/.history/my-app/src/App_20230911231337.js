import { useEffect, useRef, useState } from "react";
import "./App.css";
// import HackerNews from "./component/news/HackerNews";
// import HackerNewsReducer from "./component/news/HackerNewsReducer";
// import HackerNewsReducer from "./component/news/HackerNewsReducer";
// import { GlobalStyles } from "./GlobalStyles";
// import CardList from "./component/card/CardList";
// import { ThemeProvider } from "styled-components";
// import CardTailwind from "./component/card/CardTailwind";
// import Photos from "./component/photo/Photos";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// }

function App() {
    const timerRef = useRef(null);
    const [count, setCount] = useState(0);
    const handleStart = () => {
      setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    };
    const handleStop = ()
  return (
    <div>
      {/* <HackerNewsReducer></HackerNewsReducer> */}
      <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}
export default App;
