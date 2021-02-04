import React, { Component } from 'react';

class TaskForm extends Component {

  state = {
    title: '',
    description: ''
  }

  onSubmit = e => {
    console.log(this.state)
    e.preventDefault();
  }

  onChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name] : [e.target.value]
    }
    )
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="write a Task"
          onChange={this.onChange}
          value={this.state.title} />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="write a Description"
          onChange={this.onChange}
          value={this.state.description}>
        </textarea>
        <input type="submit" />
      </form>
    )
  }
}

export default TaskForm;