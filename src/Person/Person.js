import React from 'react';
import './Person.css';

const person = (props) => {
  return (
      <div className="Person">
        <p>I'm {props.name}, my age is {props.age}.</p>
        <input id={props.id} type="text" onChange={props.nameChange} defaultValue={props.name}/>
      </div>
  )
};
export default person;