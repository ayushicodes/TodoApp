import React from 'react';
import Todo from './Todo';
import Tododata from './Tododata';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: Tododata
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }
  render() {
    const todolist = this.state.todos.map(item => <Todo key={item.id} Tododata={item} handleChange={this.handleChange} />)
    return (
      <div className="todo-list">
        <h1>TodoList</h1>

        <p> {todolist}</p>
      </div>
    )
  }
}

export default App;
