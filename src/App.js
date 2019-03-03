import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "ABC", age: 1},
      {name: "BCD", age: 2},
      {name: "CDE", age: 3},
    ],
    showPersons: false
  };

  resetState = () => {
    this.setState({
      persons: [
        {name: "ABC", age: 1},
        {name: "BCD", age: 2},
        {name: "CDE", age: 3},
      ]
    })
  };

  changeAge = () => {
    let p1Name = this.state.persons[0].name;
    let p2Name = this.state.persons[1].name;
    let p3Name = this.state.persons[2].name;
    let p1Age = this.state.persons[0].age + 1;
    let p2Age = this.state.persons[1].age + 1;
    let p3Age = this.state.persons[2].age + 1;
    this.setState({
      persons: [
        {name: p1Name, age: p1Age},
        {name: p2Name, age: p2Age},
        {name: p3Name, age: p3Age},
      ]
    })
  };

  nameChange = (event) => {
    let p1Name = event.target.id === "p1" ? event.target.value : this.state.persons[0].name;
    let p2Name = event.target.id === "p2" ? event.target.value : this.state.persons[1].name;
    let p3Name = event.target.id === "p3" ? event.target.value : this.state.persons[2].name;
    this.setState({
      persons: [
        {name: p1Name, age: 1},
        {name: p2Name, age: 2},
        {name: p3Name, age: 3},
      ]
    })
  };

  personsHandler = () => {
    let personsFlag = this.state.showPersons;
    this.setState({
      showPersons: !personsFlag
    })
  };


  render() {
    const style = {
      backgroundColor: 'white',
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
            this.state.persons.map((person, idx) => {
              return <Person key={idx} id={idx} name={person.name} age={person.age} />
            })
          }
          {/*<Person id="p1" name={this.state.persons[0].name} age={this.state.persons[0].age} nameChange={this.nameChange} />*/}
          {/*<Person id="p2" name={this.state.persons[1].name} age={this.state.persons[1].age} nameChange={this.nameChange} />*/}
          {/*<Person id="p3" name={this.state.persons[2].name} age={this.state.persons[2].age} nameChange={this.nameChange} />*/}
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          {/*<button style={style} onClick={this.resetState}>Reset State</button>*/}
          {/*<button style={style} onClick={this.changeAge}>Change Age</button>*/}
          <button style={style} onClick={this.personsHandler}>Show Persons</button>
          {persons}
        </header>
      </div>
    );
  }
}

export default App;
