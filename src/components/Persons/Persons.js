import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component {

  constructor(props) {
    console.log('====== [Persons.js] constructor ======');
    super(props);
    this.props = props;
  }

  componentWillMount() {
    console.log('====== [Persons.js] componentWillMount ======');
  }

  componentDidMount() {
    console.log('====== [Persons.js] componentDidMount ======');
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('====== [Update Persons.js] componentWillReceiveProps ======', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('====== [Update Persons.js] shouldComponentUpdate ======', nextProps, this.props, nextState);
    console.log(this.props.persons !== nextProps.persons);
    return this.props.persons !== nextProps.persons;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('====== [Update Persons.js] componentWillUpdate ======', nextProps, nextState, nextContext);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('====== [Update Persons.js] componentDidUpdate ======', prevProps, prevState, snapshot);
  }

  render() {
    console.log('====== [Persons.js] render ======');
    const persons = this.props.persons.map((person, index) => {
      return <Person
        key={index}
        name={person.name}
        age={person.age}
        clicked={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
      />
    });
    return persons;
  }
}

// const Persons = (props) => {
//     const persons = props.persons.map((person, index)=>{
//                     return <Person
//                               key={index}
//                               name={person.name}
//                               age={person.age}
//                               clicked={()=>props.clicked(index)}
//                               changed={(event)=>props.changed(event, person.id)}
//                             />
//                   });
//     return persons;
//
// };

export default Persons;