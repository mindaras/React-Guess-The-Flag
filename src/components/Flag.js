import React from 'react';
import '../styles/Flag.css';

const Flag = (props) => (
  <img className="flag" src={props.url} alt="flag" />
);

export default Flag;
