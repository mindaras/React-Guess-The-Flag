import React from 'react';
import '../styles/AnswerStatus.css';

const AnswerStatus = (props) => {
  let answer;

  if (props.show) {
    if (props.status) {
      answer = <div className="answer-status correct">Correct!</div>;
    } else {
      answer = <div className="answer-status incorrect">Incorrect!</div>;
    }
  } else {
    answer = <div className="answer-status"></div>;;
  }

  return (
    answer
  );
};

export default AnswerStatus;
