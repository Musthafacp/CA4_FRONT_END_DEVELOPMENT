import React, { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import HomePage from "./components/HomePage";

function App() {
  const [pageNo, setPageNo] = useState(0);
  const [mark, setMark] = useState(1);

  const updateState = (page) => {
    setPageNo(page);
  };

  const updateMark = (mark) => {
    setMark(mark);
  };

  const [DARK, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("DARK");

  useEffect(() => {
    if (DARK) {
      setThemeName("DARK");
    } else {
      setThemeName("LIGHT");
    }
  }, [DARK]);

  const handleClick = () => {
    setTheme(!DARK);
  };

  const styleTheme = {
    backgroundColor: DARK ? "#FFD400" : "#27374D",
    color:DARK ? "black" : "white",
  };
  

  return (
    <div style={styleTheme}>
    <nav>
        <h1 className='navHead'>KALVIUM</h1>
        <button className='theme_button' onClick={handleClick}>
          {themeName}
        </button>
    </nav>

      {pageNo === 0 && <HomePage props1={updateState} />}
      {pageNo === 1 && <QuestionBox props1={updateState} updateMark={updateMark} />}
      {pageNo === 2 && <Result props1={updateState} mark={mark} />}
    </div>
  );
}

export default App;
