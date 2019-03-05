import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
    const persons = props.persons.map((person, index)=>{
                    return <Person
                              key={index}
                              name={person.name}
                              age={person.age}
                              clicked={()=>props.clicked(index)}
                              changed={(event)=>props.changed(event, person.id)}
                            />
                  });
    return persons;

};

export default Persons;