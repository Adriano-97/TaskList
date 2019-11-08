import React, { Component } from 'react';
import './App.css';
import './components/Todos';
import Todos from './components/Todos';

class App extends Component {
  //Toggle button function
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  state = {
    todos: [
      {
        id: 1,
        title: 'take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Game',
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className='App'>
        <h1>App</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
