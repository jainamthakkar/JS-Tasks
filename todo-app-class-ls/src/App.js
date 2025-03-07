import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    this.state = {
      todos: savedTodos
    };
  }

  saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  addTodo = (newTodo) => {
    const newTodos = [
      ...this.state.todos,
      { id: Date.now(), text: newTodo, completed: false }
    ];
    this.setState({ todos: newTodos }, () => this.saveTodosToLocalStorage(newTodos));
  };

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: newTodos }, () => this.saveTodosToLocalStorage(newTodos));
  };

  removeTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos }, () => this.saveTodosToLocalStorage(newTodos));
  };

  editTodo = (id, newText) => {
    const newTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    this.setState({ todos: newTodos }, () => this.saveTodosToLocalStorage(newTodos));
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
