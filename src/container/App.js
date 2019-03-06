import React, { Component } from 'react';
import './App.css';
import Headers from '../components/Headers/Headers';
import Buttons from '../components/Buttons/Buttons';
import Persons from '../components/Persons/Persons';

class App extends Component {

  constructor(props) {
    console.log('====== [App.js] constructor ======');
    super(props);
    this.props = props;
    this.state = {
      showPersons: false,
      persons: [
        {id:1, name: "ABC", age: 1},
        {id:2, name: "BCD", age: 2},
        {id:3, name: "CDE", age: 3},
        {id:4, name: "DEF", age: 4},
      ],
      styleBtn: {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
    };
  }

  componentWillMount() {
    console.log('====== [App.js] componentWillMount ======');
  }

  componentDidMount() {
    console.log('====== [App.js] componentDidMount ======');
  }

  resetState = () => {
    this.setState({
      persons: [
        {id:1, name: "ABC", age: 1},
        {id:2, name: "BCD", age: 2},
        {id:3, name: "CDE", age: 3},
        {id:4, name: "DEF", age: 4},
      ],
    })
  };

  changeAge = () => {
    let persons = [...this.state.persons];
    persons.map((person, key) => {
      person.age += 1;
      return null;
    });
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

  showPersonsHandler = () => {
    let showPersons = !this.state.showPersons;
    let styleBtn = {};
    if(showPersons) {
      styleBtn = {
        backgroundColor: 'red',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
    } else {
      styleBtn = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
    }
    this.setState({
      showPersons: showPersons,
      styleBtn: styleBtn,
    });
  };

  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({
      persons: persons
    })
  };


  render() {

    console.log('====== [App.js] render ======');

    // let styleShowPerson = 'none';
    // if(this.state.showPersons) {
    //   styleShowPerson = 'block';
    // }

    let persons = null;
    if(this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChange}
                />
    }

    return (
      <div className="App">
        <header className="App-header">
          <Headers appTitle={this.props.title} personCnt={this.state.persons.length} />
          <Buttons
            styleBtn={this.state.styleBtn}
            showPersonsHandler={this.showPersonsHandler}
            resetState={this.resetState}
            changeAge={this.changeAge}
          />
          {/*
          <button style={styleBtn} onClick={this.resetState}>Reset State</button>
          <button style={styleBtn} onClick={this.changeAge}>Change Age</button>
          <button style={styleBtn} onClick={this.showPersonHandler}>Show Persons</button>
          <div style={{display: styleShowPerson}}>
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChange}
            />
          </div>
          */}
          {persons}
        </header>
      </div>
    );
  }
}

export default App;
