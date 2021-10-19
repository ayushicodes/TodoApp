import React from 'react';
import Todo from './Todo';
import Tododata from './Tododata';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: Tododata
    }
  }

  render() {
    const todolist = this.state.todos.map(item => <Todo key={item.id} Tododata={item} />)
    return (
      <div>
        {todolist}
      </div>
    )
  }
}

export default App;
