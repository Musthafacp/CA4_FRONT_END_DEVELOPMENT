import React, { useState } from "react";
import question from "../questions";

export default function QuestionBox(props) {
  const data = question;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionData = data[currentQuestion];

  const [mark, setMark] = useState(1);
  const [HighLight, setHighLight] = useState("COLOR");

  const { props1, updateMark } = props;

  const ChangingQ = (isCorrect) => {
    setMark((prevMark) => (isCorrect ? prevMark + 1 : prevMark));

    setCurrentQuestion((prevQuestion) => {
      if (prevQuestion < data.length - 1) {
        return prevQuestion + 1;
      } else {
        updateMark(mark);
        props1(2);
        return prevQuestion;
      }
    });
  };

  const highlight = () => {
    setHighLight("#FF1E1E");
  };

  const dehighlight = () => {
    setHighLight("color");
  };

  const styleTheme = {
    color: HighLight === "color" ? "white" : HighLight,
  };


  return (
    <>
      <div className="questionBox">
        <p className="numberofQ">{` Question : ${currentQuestion + 1} out of ${ data.length }`}</p>
        <h1 className="question" style={styleTheme}>
          {questionData.text}
        </h1>
        <div className="buttons">
          {questionData.options.map((item) => (
            <button key={item.id} onClick={() => ChangingQ(item.isCorrect)}>
              {item.text}
            </button>
          ))}
        </div>
        <div className="highlite_button">
          <button onClick={highlight}>HIGHLIGHT</button>
          <button onClick={dehighlight}>DEHIGHLIGHT</button>
        </div>
      </div>
    </>
  );
}
