import React from 'react';
import './Person.css';

class Person extends React.Component {

  constructor(props) {
    console.log('====== [Person.js] constructor ======');
    super(props);
  }

  componentWillMount() {
    console.log('====== [Person.js] componentWillMount ======');
  }

  componentDidMount() {
    console.log('====== [Person.js] componentDidMount ======');
  }

  render() {
    console.log('====== [Person.js] render ======');
    return (
      <div className="Person">
        <p onClick={this.props.clicked}>I'm {this.props.name}, my age is {this.props.age}.</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }

}

// const person = (props) => {
//   return (
//       <div className="Person">
//         <p onClick={props.clicked}>I'm {props.name}, my age is {props.age}.</p>
//         <input type="text" onChange={props.changed} value={props.name}/>
//       </div>
//   )
// };
export default Person;