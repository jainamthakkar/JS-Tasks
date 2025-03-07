import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      newText: this.props.todo.text
    };
  }

  handleEditChange = (e) => {
    this.setState({ newText: e.target.value });
  };

  handleEditSave = () => {
    if (this.state.newText.trim()) {
      this.props.editTodo(this.props.todo.id, this.state.newText);
      this.setState({ isEditing: false });
    }
  };

  handleCancelEdit = () => {
    this.setState({ newText: this.props.todo.text, isEditing: false });
  };

  render() {
    const { todo, toggleTodo, removeTodo } = this.props;
    return (
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {this.state.isEditing ? (
          <>
            <input
              type="text"
              value={this.state.newText}
              onChange={this.handleEditChange}
              onBlur={this.handleEditSave}
              autoFocus
            />
            <button onClick={this.handleEditSave}>Save</button>
            <button onClick={this.handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => this.setState({ isEditing: true })}>
              Edit
            </button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </>
        )}
      </li>
    );
  }
}

export default TodoItem;
