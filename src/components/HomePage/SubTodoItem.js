import React, { Component } from 'react';

export class SubTodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.subtodo.completed ? 'line-through' : 'none',
      fontSize: 14,
      marginLeft: '20px'
    };
  };
  render() {
    const { id, title } = this.props.subtodo;
    return (
      <div style={this.getStyle()}>
        <input
          type='checkbox'
          onChange={this.props.markCompleteSub.bind(
            this,
            id,
            this.props.todo.id
          )}
        />{' '}
        {title}
      </div>
    );
  }
}

export default SubTodoItem;
