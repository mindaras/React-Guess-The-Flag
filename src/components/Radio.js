import React from 'react';
import '../styles/Radio.css';

const Radio = (props) => (
  <div className="radios__wrapper">
    <input name="country" type="radio" className="radios__input" id={props.id} />
    <label className="radios__label" htmlFor={props.id} onClick={() => props.checkAnswer(props.id)}>
      {props.country.name}
    </label>
  </div>
);

export default Radio;
