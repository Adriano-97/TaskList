import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddSubTask from './AddSubTodo';
import SubTodo from './SubTodo';
import uuid from 'uuid';

export class TodoItem extends Component {
  state = {
    subTodos: [
      {
        id: uuid.v4(),
        title: 'Get the trash',
        completed: false
      }
    ]
  };

  markCompleteSub = subid => {
    this.setState({
      subTodos: this.state.subTodos.map(subTodo => {
        if (subTodo.id === subid) {
          subTodo.completed = !subTodo.completed;
        }
        return subTodo;
      })
    });
  };
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      borderBottom: '1px #ccc dotted'
    };
  };
  insertSubT = id => {};
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
        <SubTodo
          subTodos={this.state.subTodos}
          todo={this.props.todo}
          markCompleteSub={this.markCompleteSub}
        />
        <AddSubTask insertSubT={this.insertSubT} todo={this.props.todo} />
      </div>
    );
  }
}
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  boder: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
export default TodoItem;
