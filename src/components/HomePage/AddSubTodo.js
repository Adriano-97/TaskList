import React, { Component } from 'react';

export class AddSubTodo extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.insertSubT.bind(this, this.props.todo.id)}>
          <input type='text' name='subtitle' placeholder='Add sub task' />
          <input type='submit' value='Add' style={btnStyle} className='btn' />
        </form>
      </div>
    );
  }
}

const btnStyle = {
  marginLeft: '20px',
  backgroundColor: '#333',
  color: '#fff',
  cursor: 'pointer',
  padding: '3px 2px'
};
export default AddSubTodo;
