import React from 'react';

export default function Result(props) {
  const { props1, mark } = props;

  console.log(mark);

  const GoAgain = () => {
    props1(1);
  };

  return (
    <>
      <div className='result'>
        <div className='innerDiv'>
          <h1>Final Result</h1>
          <p>{mark} of 5 Correct - ( {mark * 20} % )</p>
        </div>
        <div className='goAgain'>
          <button onClick={GoAgain}>Go Again</button>
        </div>
      </div>
    </>
  );
}
