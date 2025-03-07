import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTodo.trim()) {
      this.props.addTodo(this.state.newTodo);
      this.setState({ newTodo: "" });
    }
  };

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoForm;
