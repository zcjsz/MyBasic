import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    this.clicked = props.clicked;
    this.changed = props.changed;
  }

  render() {
    const persons = this.props.persons.map((person, index)=>{
                    return <Person key={index} name={person.name} age={person.age}
                              clicked={()=>this.clicked(index)}
                              changed={(event)=>this.changed(event, person.id)}
                            />
                  });
    return persons;
  }

}

export default Persons;