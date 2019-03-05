import React from 'react';

const Buttons = (props) => {
    return (
      <div>
        <button style={props.styleBtn} onClick={props.showPersonsHandler}>Show Persons</button>
        <button style={props.styleBtn} onClick={props.resetState}        >Reset State</button>
        <button style={props.styleBtn} onClick={props.changeAge}         >Change Age</button>
      </div>
    )
};

export default Buttons;