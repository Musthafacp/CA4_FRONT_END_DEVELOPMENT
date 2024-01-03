import React from "react";

function HomePage(props) {

  const data = props
  const play = () => {
    data.props1(1)
  }

  return (
    <>
      <div className="home">
        <h1 className="home_Head">QuizQuest</h1>
        <button className="play_button" onClick={play}>PLAY</button>
      </div>
    </>
  );
}

export default HomePage;
