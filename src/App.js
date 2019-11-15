import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './components/Todos';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Game',
        completed: false
      }
    ]
  };

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

  //Delete Todo Item
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <div className='container'>
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    // markCompleteSub={this.markCompleteSub}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
