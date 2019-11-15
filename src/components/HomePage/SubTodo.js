import React, { Component } from 'react';
import SubTodoItem from './SubTodoItem';

export class SubTodo extends Component {
  render() {
    return this.props.subTodos.map(subtodo => (
      <SubTodoItem
        key={subtodo.id}
        subtodo={subtodo}
        markCompleteSub={this.props.markCompleteSub}
        todo={this.props.todo}
      />
    ));
  }
}

export default SubTodo;
