import React from 'react';
import './Person.css';

const person = (props) => {
  return (
      <div className="Person">
        <p onClick={props.myclick}>I'm {props.name}, my age is {props.age}.</p>
        <input type="text" onChange={props.nameChange} value={props.name}/>
      </div>
  )
};
export default person;