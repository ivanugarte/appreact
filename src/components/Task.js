import React, { Component } from 'react';

class Task extends Component {
  render() {
    const {task} = this.props;
    const redColor = {background:'green'};
    return <div style={redColor}>
       {task.id} 
       {task.title}
       {task.description} 
       {task.done}
      <input type="checkbox" />
      <button>X</button>
    </div>
  }
}
export default Task;