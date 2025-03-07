import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Date.now(), text: newTodo, completed: false }
      ]
    });
  };

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };

  editTodo = (id, newText) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    });
  };

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoForm addTodo={this.addTodo} />
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={this.toggleTodo}
              removeTodo={this.removeTodo}
              editTodo={this.editTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
