import React, { Component } from 'react';
import './App.css';
import Person from '../components/Person/Person';

class App extends Component {

  state = {
    persons: [
      {id:1, name: "ABC", age: 1},
      {id:2, name: "BCD", age: 2},
      {id:3, name: "CDE", age: 3},
      {id:4, name: "DEF", age: 4},
    ],
    showPersons: false
  };

  resetState = () => {
    this.setState({
      persons: [
        {id:1, name: "ABC", age: 1},
        {id:2, name: "BCD", age: 2},
        {id:3, name: "CDE", age: 3},
        {id:4, name: "DEF", age: 4},
      ]
    })
  };

  changeAge = () => {
    let persons = [...this.state.persons];
    persons.map((person, key) => {
      person.age += 1;
    })
    this.setState({
      persons: persons
    });
  };

  nameChange = (event, id) => {
    let personIdx = this.state.persons.findIndex((p) => {
      return p.id === id
    });
    let persons = [...this.state.persons];
    persons[personIdx].name = event.target.value;
    this.setState({
      persons: persons
    })
  };

  showPersonHandler = () => {
    let personsFlag = this.state.showPersons;
    this.setState({
      showPersons: !personsFlag
    })
  };

  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({
      persons: persons
    })
  };


  render() {
    const styleBtn = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, key) => {
              return <Person
                key={key}
                name={person.name}
                age={person.age}
                myclick={() => this.deletePersonHandler(key)}
                nameChange={(event) => this.nameChange(event, person.id)}
              />
            })
          }
        </div>
      );
      styleBtn.backgroundColor = 'red';
    } else {
      styleBtn.backgroundColor = 'green';
    }

    let dyClass = [];
    switch(this.state.persons.length) {
      case 1: {dyClass.push('red');      break;}
      case 2: {dyClass.push('bold');     break;}
      case 3: {dyClass.push('red bold'); break;}
      case 4: {dyClass.push('bold'); break;}
      default: break;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World!</h1>
          <p className={dyClass}>Hi React</p>
          <button style={styleBtn} onClick={this.resetState}>Reset State</button>
          <button style={styleBtn} onClick={this.changeAge}>Change Age</button>
          <button style={styleBtn} onClick={this.showPersonHandler}>Show Persons</button>
          {persons}
        </header>
      </div>
    );
  }
}

export default App;
