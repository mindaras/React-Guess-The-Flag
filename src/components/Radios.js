import React from 'react';
import '../styles/Radios.css';
import Radio from './Radio';

const Radios = (props) => (
  <div className="radios">
    <Radio country={props.countries[0]} id={props.ids[0]} checkAnswer={props.checkAnswer} />
    <Radio country={props.countries[1]} id={props.ids[1]} checkAnswer={props.checkAnswer} />
    <Radio country={props.countries[2]} id={props.ids[2]} checkAnswer={props.checkAnswer} />
    <Radio country={props.countries[3]} id={props.ids[3]} checkAnswer={props.checkAnswer} />
  </div>
);

export default Radios;
