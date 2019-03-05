import React from 'react';
import './Headers.css';

const Headers = (props) => {
    let classes = [];
    if(props.personCnt > 1) { classes.push('red');    }
    if(props.personCnt > 2) { classes.push('bold');   }
    if(props.personCnt > 3) { classes.push('italic'); }
    return (
      <div>
        <h1>{props.appTitle}</h1>
        <p className={classes.join(" ")}>Hi React</p>
      </div>
    )
};

export default Headers;